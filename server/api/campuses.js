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

router.get("/:id", async (req, res, next) => {
  try {
    let campus = await Campus.findByPk(req.params.id, {
      include: Student,
    });
    res.status(200).send(campus);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
