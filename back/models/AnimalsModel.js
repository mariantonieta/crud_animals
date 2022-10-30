import db from "../database/db.js";
import { DataTypes } from "sequelize";
const AnimalsModel = db.define("tanimals", {
  name: { type: DataTypes.STRING },
  age: { type: DataTypes.NUMBER },
  breed: { type: DataTypes.STRING },
});
export default AnimalsModel;
