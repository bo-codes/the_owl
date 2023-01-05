// the main purpose of this express app is to be a REST API server
// all API routes will be served at URL's starting with /api/
const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.post("/test", (req, res) => {
    res.json({ requestBody: req.body });
});

module.exports = router;
