var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/pageTwo", function (req, res, next) {
  req.session.firstName = req.query.firstName;
  res.render("you", { title: "Express", firstName: req.session.firstName });
});

router.get("/pageTree", function (req, res, next) {
  res.render("youagain", {
    title: "Express",
    firstName: req.session.firstName,
  });
});

module.exports = router;
