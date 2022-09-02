import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCampus } from "../../store/campusStores/campusesStore";

function AddCampusForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  // const [input, setInput] = {};

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (imageUrl === "" || !imageUrl) {
      let newCampus = {
        name,
        address,
        description,
      };
      dispatch(addCampus(newCampus));
    } else {
      let newCampus = {
        name,
        address,
        description,
        imageUrl,
      };
      dispatch(addCampus(newCampus));
    }
    setName("");
    setAddress("");
    setDescription("");
    setImageUrl("");
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleImageUrl = (event) => {
    setImageUrl(event.target.value);
  };

  // const handleChange = (props = (event) => {
  //   setInput({
  //     ...input,
  //     [props]: event.target.value,
  //   });
  // });

  return (
    <form id="add-campus" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        value={name}
        placeholder="Name"
        onChange={handleName}
      />

      <label htmlFor="address">Address</label>
      <input
        id="address"
        name="address"
        value={address}
        placeholder="Address"
        onChange={handleAddress}
      />

      <label htmlFor="description">Description</label>
      <input
        id="description"
        name="description"
        value={description}
        placeholder="Description"
        onChange={handleDescription}
      />

      <label htmlFor="imageUrl">Image</label>
      <input
        id="imageUrl"
        name="imageUrl"
        value={imageUrl}
        placeholder="Image"
        onChange={handleImageUrl}
      />

      <button type="submit">Add New Campus</button>
    </form>
  );
}

export default AddCampusForm;
