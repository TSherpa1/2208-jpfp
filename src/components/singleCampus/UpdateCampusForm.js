import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  updateCampus,
  getCampus,
} from "../../store/campusStores/singleCampusStore";

function UpdateCampusForm(props) {
  const campus = props.campus;

  //formInputs will be the entire campus object, but you're going to be getting out the name, address, imageUrl, description (formInputs.campus)
  const [formInputs, setFormInputs] = useState(campus);
  const [formErrors, setFormErrors] = useState({});

  //this useEffect is needed to preload data onto the form (when campus changes, you're going to change the state of all these), this is needed as you are going to have undefined values at first for all your states and only during the second render (once campus is defined) will you have all those values
  useEffect(() => {
    setFormInputs(campus);
  }, [campus]);

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setFormErrors(validateForm(formInputs))
    //Occasionally, the getCampus runs before the updateCampus, putting both in an async function and awaiting both made to where updateCampus ran and completed before getCampus
    await dispatch(updateCampus(formInputs));
    //needed to run getCampus after bc the express route that updateCampus uses doesn't eager load the students, so after the campusUpdates, just use the get route to get the students
    await dispatch(getCampus(campus.id));
    //the page rerenders automatically (after running the update dispatch on line 60)
  };

  const handleChange = (event) => {
    setFormInputs({ ...formInputs, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form id="update-campus" onSubmit={handleSubmit}>
        <h2>Update Campus</h2>
        <label htmlFor="name">Name </label>
        <input
          id="name"
          name="name"
          value={formInputs.name || ""}
          onChange={handleChange}
        />

        <label htmlFor="address">Address </label>
        <input
          id="address"
          name="address"
          value={formInputs.address || ""}
          onChange={handleChange}
        />

        <label htmlFor="description">Description </label>
        <input
          id="description"
          name="description"
          value={formInputs.description || ""}
          onChange={handleChange}
        />

        <label htmlFor="imageUrl">Image </label>
        <input
          id="imageUrl"
          name="imageUrl"
          value={formInputs.imageUrl || ""}
          onChange={handleChange}
        />

        <button type="submit">Update Campus</button>
      </form>
    </div>
  );
}

export default UpdateCampusForm;
