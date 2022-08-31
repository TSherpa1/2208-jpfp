import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../../store/studentStores/studentsStore";

function AddStudentForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [gpa, setGPA] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (imageUrl === "" || !imageUrl) {
      let newStudent = {
        firstName,
        lastName,
        email,
        gpa,
      };
      dispatch(addStudent(newStudent));
    } else {
      let newStudent = {
        firstName,
        lastName,
        email,
        imageUrl,
        gpa,
      };
      dispatch(addStudent(newStudent));
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setGPA("");
    setImageUrl("");
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
        value={firstName}
        placeholder="First Name"
        onChange={handleFirstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName "
        value={lastName}
        placeholder="Last Name"
        onChange={handleLastName}
      />
      <label htmlFor="email">Email</label>
      <input
        name="email "
        value={email}
        placeholder="Email"
        onChange={handleEmail}
      />
      <label htmlFor="imageUrl">Image</label>
      <input
        name="imageUrl "
        value={imageUrl}
        placeholder="Image"
        onChange={handleImageUrl}
      />
      <label htmlFor="gpa">GPA</label>
      <input name="gpa " value={gpa} placeholder="GPA" onChange={handleGPA} />
      <button type="submit">Add New Student</button>
    </form>
  );
}

export default AddStudentForm;
