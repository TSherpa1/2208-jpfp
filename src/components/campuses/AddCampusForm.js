import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCampus } from "../../store/campusStores/campusesStore";

function AddCampusForm() {
  const campusData = { name: "", address: "", description: "", imageUrl: "" };
  const [formInputs, setFormInputs] = useState(campusData);
  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFormInputs({ ...formInputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //if the user gives no image url in the form, remove the form input property so sequelize will give the default imageUrl,
    //without this the imageUrl will be just an empty string, in which case it would overwrite the default image
    if (formInputs.imageUrl === "") {
      delete formInputs.imageUrl;
    }
    //before dispatching to the store, you will validate the inputs being passed in (in this case is this purely to render the errors, the actual errors are thrown on the backend when dispatching)
    //formErrors is a state that will be set to the return value of running the validateForm function
    //you're passing in the formInputs, which is what is being entered into the form
    setFormErrors(validateForm(formInputs));
    dispatch(addCampus(formInputs));
    setFormInputs(campusData);
  };

  //here whatever your inputs are will be checked
  const validateForm = (inputs) => {
    //this error messages object will serve to be where you add key/value pairs
    const errorMessages = {};
    //epmty strings are falsey, so if the field is an empty string(which is the default state)
    if (!inputs.name) {
      //set an errors.name property equal to the string below, this will be rendered out in the p tags in your component's return statement (formErrors.name)
      errorMessages.name = "Please enter a campus name!";
    }
    if (!inputs.address) {
      errorMessages.address = "Please enter an address!";
    }
    //return the object after
    return errorMessages;
    //if both condtions are met, errors = {name: "Please enter a campus name!", address: "Please enter an address"}
  };

  return (
    <div id="add-campus">
      <form id="add-campus-form" onSubmit={handleSubmit}>
        <h2>Add Campus</h2>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          //pass formInputs.name to the value property
          value={formInputs.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <p>{formErrors.name}</p>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          name="address"
          value={formInputs.address}
          placeholder="Address"
          onChange={handleChange}
        />
        <p>{formErrors.address}</p>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          value={formInputs.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <p></p>
        <label htmlFor="imageUrl">Image</label>
        <input
          id="imageUrl"
          name="imageUrl"
          value={formInputs.imageUrl}
          placeholder="Image"
          onChange={handleChange}
        />
        <p></p>
        <button type="submit">Add New Campus</button>
      </form>
    </div>
  );
}

export default AddCampusForm;
