import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  updateCampus,
  getCampus,
} from "../../store/campusStores/singleCampusStore";

function UpdateCampusForm(props) {
  const campus = props.campus;

  const [name, setName] = useState(campus.name);
  const [address, setAddress] = useState(campus.address);
  const [description, setDescription] = useState(campus.description);
  const [imageUrl, setImageUrl] = useState(campus.imageUrl);

  //this useEffect is needed to preload data onto the form (when campus changes, you're going to change the state of all these), this is needed as you are going to have undefined values at first for all your states and only during the second render (once campus is defined) will you have all those values
  useEffect(() => {
    setName(campus.name);
    setAddress(campus.address);
    setDescription(campus.description);
    setImageUrl(campus.imageUrl);
  }, [campus]);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    let newCampus = {
      name,
      address,
      description,
      imageUrl,
    };
    async function runDispatch() {
      //spreading everything currently in campus and adding any new changes coming from newCampus
      await dispatch(updateCampus({ ...campus, ...newCampus }));
      //needed to run getCampus after bc the express route that updateCampus uses doesn't eager load the students, so after the campusUpdates, just use the get route to get the students
      await dispatch(getCampus(campus.id));
    }
    //Occasionally, the getCampus runs before the updateCampus, putting both in an async function and awaiting both made to where updateCampus ran and completed before getCampus
    runDispatch();
    //ask if this counts as a refresh of the page, according to the instructions updates should happen without any page refreshes (manual or auto)
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

  return (
    <form id="update-campus" onSubmit={handleSubmit}>
      <label htmlFor="name">Name </label>
      <input id="name" name="name" value={name || ""} onChange={handleName} />

      <label htmlFor="address">Address </label>
      <input
        id="address"
        name="address"
        value={address || ""}
        onChange={handleAddress}
      />

      <label htmlFor="description">Description </label>
      <input
        id="description"
        name="description"
        value={description || ""}
        onChange={handleDescription}
      />

      <label htmlFor="imageUrl">Image </label>
      <input
        id="imageUrl"
        name="imageUrl"
        value={imageUrl || ""}
        onChange={handleImageUrl}
      />

      <button type="submit">Update Campus</button>
    </form>
  );
}

export default UpdateCampusForm;
