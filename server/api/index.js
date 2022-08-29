const router = require("express").Router();
const campuses = require("./campuses");
const students = require("./students");

router.use("/campuses", campuses);
router.use("/students", students);

module.exports = router;
