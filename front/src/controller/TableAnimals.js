import axios from "axios";
import { useState, useEffect } from "react";
import {
  BsFillPersonPlusFill,
  BsFillBrushFill,
  BsFillXSquareFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
const URL = "http://localhost:8080/animals/";
const TableAnimals = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    getAnimals();
  }, []);
  const getAnimals = async () => {
    const res = await axios.get(URL);
    setAnimals(res.data);
  };
  const deleteAnimal = async (id) => {
    await axios.delete(`${URL}${id}`);
    getAnimals();
  };
  return (
    <div className="container">
      <h2> LIST OF ANIMALS </h2>
      <div className="row">
        <div className="col">
          <Link to="/create" className="btnCreate btn mt-2 mb-2">
            <i className="fas- fas-plus">
              <BsFillPersonPlusFill></BsFillPersonPlusFill>
            </i>
          </Link>
          <table className="table">
            <thead className="table-bg-dark">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Breed</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {animals.map((animal) => (
                <tr key={animal.id}>
                  <td> {animal.id} </td>
                  <td> {animal.name} </td>
                  <td> {animal.age} </td>
                  <td> {animal.breed} </td>
                  <td>
                    <Link to={`/edit/${animal.id}`} className="btnEdit">
                      <BsFillBrushFill></BsFillBrushFill>
                    </Link>
                    <button
                      onClick={() => deleteAnimal(animal.id)}
                      className="btnDelete btn"
                    >
                      <BsFillXSquareFill></BsFillXSquareFill>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TableAnimals;
