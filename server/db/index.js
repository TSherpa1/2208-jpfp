// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require("./database");
const Student = require("./student");
const Campus = require("./campus");
const { studentsData, campusesData } = require("./seedingData");

Student.belongsTo(Campus);
Campus.hasMany(Student);

const syncAndSeed = async () => {
  await db.sync({ force: true });

  //use this area to sync your database

  //grabbing the campuses/students data arrays from the seedingData file
  campusesData.forEach(async (campus) => await Campus.create(campus));
  studentsData.forEach(async (student) => {
    let currentStudent = await Student.create(student);
    //using whatever current student was created and setting their campus to a random campus depending on the campuses' id
    await currentStudent.setCampus(
      await Campus.findByPk(Math.floor(Math.random() * 5) + 1)
    );
  });

  console.log(`
    Seeding successful!
  `);
};

module.exports = {
  // Include your models in this exports object as well!
  db,
  syncAndSeed,
  Student,
  Campus,
};
