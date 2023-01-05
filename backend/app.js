// we initialize our express app in this file
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const { ValidationError } = require("sequelize");

const routes = require("./routes");

// bringing the current environment/ the environment key from the config/index.js file
const { environment } = require("./config");
// if the current environment is the production environment, isProduction will be true
const isProduction = environment === "production";

// initializing the express app
const app = express();


// -------------------- PRE-REQUEST MIDDLEWARE -------------------- vv//
// -------------------- PRE-REQUEST MIDDLEWARE -------------------- vv//

// connecting morgan middleware for logging info about req's and res's
app.use(morgan("dev"));

// connecting cookie-parser middleware for parsing cookies
app.use(cookieParser());
// connecting express.json middleware for parsing JSON bodies of req's with Content-Type of "application/json"
app.use(express.json());



// ---------- cors ---------- vv//
// Security Middleware
if (!isProduction) {
    // enable cors only in development, since our react frontend will be served from a different server than the Express server
    // it's not needed in production because our react and express resources will come from the same origin
    app.use(cors());
}
// ---------- cors ---------- ^^//



// ---------- helmet ---------- vv//
// helmet helps set a variety of headers to better secure your app
app.use(
    helmet.crossOriginResourcePolicy({
        policy: "cross-origin",
    })
);
// ---------- helmet ---------- ^^//



// ---------- CSURF ---------- vv//
// adding the csurf middleware and configuring it to use cookies
// Set the _csrf token and create req.csrfToken method
// csurf middleware will add a _csrf cookie that is HTTP-only (can't be read by JavaScript) to any server response
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true,
        },
    })
);
// It also adds a method on all requests (req.csrfToken) that will be set to another cookie (XSRF-TOKEN) later on
// These two cookies work together to provide CSRF protection
// the XSRF-TOKEN cookie value needs to be sent in the header of any request with all HTTP verbs (besides GET).
// this header will be used to validate the _csrf cookie to confirm that the request comes from your site and not an unauthorized site.
// ---------- CSURF ---------- ^^//

// -------------------- PRE-REQUEST MIDDLEWARE -------------------- ^^//
// -------------------- PRE-REQUEST MIDDLEWARE -------------------- ^^//


app.use(routes); // Connect all the routes


// -------------------- ERROR HANDLING MIDDLEWARES -------------------- vv//
// -------------------- ERROR HANDLING MIDDLEWARES -------------------- vv//

// ---------- RESOURCE NOT FOUND ERROR HANDLER ---------- vv//

// this is just a regular middleware. this is why it doesnt have the signature 4 parameters like the ones below
// Catch unhandled requests(any requests that don't match any of the routes defined) and create a server err with status code 400 to forward to error handler.
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
});
// after the err is created with the provided message, 'next' will be invoked with the error. Remember, next invoked with nothing means that error handlers defined after this middleware will not be invoked. However, next invoked with an error means that error handlers defined after this middleware will be invoked.

// ---------- RESOURCE NOT FOUND ERROR HANDLER ---------- ^^//




// ---------- SEQUELIZE ERROR HANDLER ---------- vv//

// Process sequelize errors
app.use((err, _req, _res, next) => {
    // check if error is a Sequelize error:
    if (err instanceof ValidationError) {
      // if so, then the error was created from a Sequelize database validation error and
      // the additional keys of title string and errors array will be added to the error and passed into the next error handling middleware.
      err.errors = err.errors.map((e) => e.message);
      err.title = "Validation error";
    }
    next(err);
});

// ---------- SEQUELIZE ERROR HANDLER ---------- ^^//




// ---------- ERROR FORMATTER ERROR HANDLER ---------- vv//

// Error formatter
// just formats all the errors before returning a JSON response
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || "Server Error",
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});

// ---------- ERROR FORMATTER ERROR HANDLER ---------- ^^//

// -------------------- ERROR HANDLING MIDDLEWARES -------------------- ^^//
// -------------------- ERROR HANDLING MIDDLEWARES -------------------- ^^//

module.exports = app;
