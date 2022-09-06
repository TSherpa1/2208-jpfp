import React, { useState, useEffect } from "react";
import {
  updateStudent,
  getStudent,
} from "../../store/studentStores/singleStudentStore";
import { useDispatch, useSelector } from "react-redux";

function UpdateStudentForm(props) {
  const student = props.student;
  const campuses = useSelector((state) => state.allCampuses);

  //setting the state to the student object
  const [formInputs, setFormInputs] = useState(student);
  //preloading data onto form
  useEffect(() => {
    setFormInputs(student);
  }, [student]);

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setFormErrors(validateForm(formInputs))
    await dispatch(updateStudent(formInputs));
    await dispatch(getStudent(student.id));
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    //spread the state of the existing data, but set the particular particular attribute to the value entered in
    setFormInputs({ ...formInputs, [event.target.name]: event.target.value });
  };

  return (
    <form id="update-student" onSubmit={handleSubmit}>
      <h2>Update Student</h2>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        value={formInputs.firstName || ""}
        placeholder="First Name"
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        value={formInputs.lastName || ""}
        placeholder="Last Name"
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        value={formInputs.email || ""}
        placeholder="Email"
        onChange={handleChange}
      />
      <label htmlFor="imageUrl">Image</label>
      <input
        id="imageUrl"
        name="imageUrl"
        value={formInputs.imageUrl || ""}
        placeholder="Image"
        onChange={handleChange}
      />
      <label htmlFor="gpa">GPA</label>
      <input
        id="gpa"
        name="gpa"
        value={formInputs.gpa || ""}
        placeholder="GPA"
        onChange={handleChange}
      />
      <label htmlFor="campusId">Select a campus</label>

      <select name="campusId" id="campusId" onChange={handleChange}>
        <option defaultValue={student && student.campusId}>
          {student.campus && student.campus.name}
        </option>
        {campuses &&
          campuses
            .filter((campus) => campus.id !== student.campusId)
            .map((filteredCampus) => (
              <option
                name="campusId"
                value={filteredCampus.id}
                key={filteredCampus.id}
              >
                {filteredCampus.name}
              </option>
            ))}
      </select>
      <button type="submit">Update Student</button>
    </form>
  );
}

export default UpdateStudentForm;
