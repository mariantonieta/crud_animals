import express from "express";
import cors from "cors";
import db from "./database/db.js";
import routes from "./routes/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/animals", routes);
try {
  await db.authenticate();
  console.log("Conexion exitosa a la DB");
} catch (error) {
  console.log("error en la DB", error);
}
app.get("/", (req, res) => {
  res.send("hola mundo");
});
app.listen(8080, () => {
  console.log("Server UP running in http://localhost:8080/");
});
