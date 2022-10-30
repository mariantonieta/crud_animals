import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const URL = "http://localhost:8080/animals/";
const EditTable = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const update = async (e) => {
    e.preventDefault();
    await axios.patch(URL + id, {
      name: name,
      age: age,
      breed: breed,
    });
    navigate("/");
  };
  return (
    <div className="container-create">
      <h3 className="row center">Edit Animal</h3>
      <form onSubmit={update}>
        <div className="input">
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div className="input">
          <label>Age</label>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="text"
          />
        </div>
        <div className="input">
          <label>Breed</label>
          <input
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            type="text"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTable;
