import React, { useState, useEffect } from "react";
import {
  updateStudent,
  getStudent,
} from "../../store/studentStores/singleStudentStore";
import { useDispatch } from "react-redux";

function UpdateStudentForm(props) {
  const student = props.student;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [gpa, setGPA] = useState("");

  useEffect(() => {
    setFirstName(student.firstName);
    setLastName(student.lastName);
    setEmail(student.email);
    setImageUrl(student.imageUrl);
    setGPA(student.gpa);
  }, [student]);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    let newStudent = {
      firstName,
      lastName,
      email,
      imageUrl,
      gpa,
    };
    async function runDispatch() {
      await dispatch(updateStudent({ ...student, ...newStudent }));
      await dispatch(getStudent(student.id));
    }
    runDispatch();
  };

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleImageUrl = (event) => {
    setImageUrl(event.target.value);
  };
  const handleGPA = (event) => {
    setGPA(event.target.value);
  };
  return (
    <form id="add-student" onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName "
        value={firstName || ""}
        placeholder="First Name"
        onChange={handleFirstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName "
        value={lastName || ""}
        placeholder="Last Name"
        onChange={handleLastName}
      />
      <label htmlFor="email">Email</label>
      <input
        name="email "
        value={email || ""}
        placeholder="Email"
        onChange={handleEmail}
      />
      <label htmlFor="imageUrl">Image</label>
      <input
        name="imageUrl "
        value={imageUrl || ""}
        placeholder="Image"
        onChange={handleImageUrl}
      />
      <label htmlFor="gpa">GPA</label>
      <input
        name="gpa "
        value={gpa || ""}
        placeholder="GPA"
        onChange={handleGPA}
      />
      <button type="submit">Add New Student</button>
    </form>
  );
}

export default UpdateStudentForm;
