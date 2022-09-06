import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../../store/studentStores/studentsStore";
import { useSelector } from "react-redux";

function AddStudentForm() {
  const campuses = useSelector((state) => state.allCampuses);
  const students = useSelector((state) => state.allStudents);
  const studentValues = {
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "",
    gpa: "",
    campusId: "",
  };
  const [formInputs, setFormInputs] = useState(studentValues);
  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formInputs.imageUrl === "") {
      delete formInputs.imageUrl;
    }
    if (formInputs.gpa === "") {
      delete formInputs.gpa;
    }
    setFormErrors(validateForm(formInputs));
    dispatch(addStudent(formInputs));
    setFormInputs(studentValues);
  };

  const handleChange = (event) => {
    setFormInputs({
      ...formInputs,
      [event.target.name]: event.target.value,
    });
  };

  // const handleSelect = (event) => {
  //   console.log("name:", event.target.name);
  //   console.log("value:", event.target.value);
  // };

  //refer to add campus form for validation explanation
  const validateForm = (inputs) => {
    const errorMessages = {};
    if (!inputs.firstName) {
      errorMessages.firstName = "Please enter a first name!";
    }
    if (!inputs.lastName) {
      errorMessages.lastName = "Please enter a last name!";
    }
    if (!inputs.email) {
      errorMessages.email = "Please enter an email!";
    }
    if (!inputs.campusId) {
      errorMessages.campusId = "Please select a campus!";
    }
    return errorMessages;
  };

  return (
    <div id="add-student">
      <h2>Add Student</h2>
      <form id="add-student-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          value={formInputs.firstName}
          placeholder="First Name"
          onChange={handleChange}
        />
        <p>{formErrors.firstName}</p>
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          value={formInputs.lastName}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <p>{formErrors.lastName}</p>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={formInputs.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <p>{formErrors.email}</p>
        <label htmlFor="imageUrl">Image</label>
        <input
          name="imageUrl"
          value={formInputs.imageUrl}
          placeholder="Image"
          onChange={handleChange}
        />
        <p></p>
        <label htmlFor="gpa">GPA</label>
        <input
          name="gpa"
          value={formInputs.gpa}
          placeholder="GPA"
          onChange={handleChange}
        />
        <p></p>
        <label htmlFor="campusId">Select a campus</label>

        <select name="campusId" id="campusId" onChange={handleChange}>
          <option defaultValue="">Select Campus</option>
          {campuses &&
            campuses.map((campus) => (
              <option name="campusId" value={campus.id} key={campus.id}>
                {campus.name}
              </option>
            ))}
        </select>
        <p>{formErrors.campusId}</p>
        <button type="submit">Add New Student</button>
      </form>
    </div>
  );
}

export default AddStudentForm;
