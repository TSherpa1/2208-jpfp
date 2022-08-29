const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const { Campus, Student } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    let allCampuses = await Campus.findAll({
      include: Student,
    });
    res.status(200).send(allCampuses);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
