const express = require("express");
const router = express.Router();

// importing the ./api/index.js file and connecting it to the router here
const apiRouter = require("./api");

// this means all routes in the api router will be prefixed with /api
router.use("/api", apiRouter);


// TESTING ROUTE //
// router.get("/hello/world", function (req, res) {
//   res.cookie("XSRF-TOKEN", req.csrfToken());
//   res.send("Hello World!");
// });

// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === "production") {
    const path = require("path");
    // Serve the frontend's index.html file at the root route
    router.get("/", (req, res) => {
        res.cookie("XSRF-TOKEN", req.csrfToken());
        return res.sendFile(path.resolve(__dirname, "../../frontend", "build", "index.html"));
    });

    // Serve the static assets in the frontend's build folder
    router.use(express.static(path.resolve("../frontend/build")));

    // Serve the frontend's index.html file at all other routes NOT starting with /api
    router.get(/^(?!\/?api).*/, (req, res) => {
        res.cookie("XSRF-TOKEN", req.csrfToken());
        return res.sendFile(path.resolve(__dirname, "../../frontend", "build", "index.html"));
    });
}

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== "production") {
    router.get("/api/csrf/restore", (req, res) => {
        res.cookie("XSRF-TOKEN", req.csrfToken());
        return res.json({});
    });
}

module.exports = router;
