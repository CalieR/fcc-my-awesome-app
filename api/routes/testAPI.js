var express = require("express");
var router = express.Router();

// this is the res got by the fetch() in client App component
router.get("/", function(req, res, next) {
  res.send("API is working properly");
});

module.exports = router;
