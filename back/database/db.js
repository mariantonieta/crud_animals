import { Sequelize } from "sequelize";
const db = new Sequelize("animals", "root", "Maria_2305", {
  host: "localhost",
  dialect: "mysql",
});
export default db;
