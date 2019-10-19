const router = require('express').Router();

// router.get("/health", function(req, res) {
//   res.body = "Up and running";
// QUESTION: why this endpoint blocks the app?
// ANSWER: We are creating a route at the root path of this Router.
// We are using get method here, so the matching is exact. If we put random words in the route
// we have to make sure that it's handled by middleware in the app.js
// });

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Up and running!'
  })
});

module.exports = router;
