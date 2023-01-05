// the main purpose of this express app is to be a REST API server
// all API routes will be served at URL's starting with /api/
const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");


router.use("/session", sessionRouter);

router.use("/users", usersRouter);

// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');




// TESTING ROUTES //

// GETS USER DEMO LITION AND RETURNS INTS INFO IN JSON FORMAT //
// router.get(
//   "/set-token-cookie",
//   asyncHandler(async (_req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: "Demo-lition",
//       },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
//   })
// );

// RESTORES THE CURRENT USER //
// // GET /api/restore-user
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// USES THE REQUIRE AUTH MIDDLEWARE TO REQUIRE AUTHORIZATION FOR THE ROUTE AND RETURNS THE USER INFO IN JSON FORMAT //
// // GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// router.post("/test", (req, res) => {
//     res.json({ requestBody: req.body });
// });

module.exports = router;
