import express from "express";
import {
  createAnimal,
  deleteAnimal,
  getAllAnimals,
  getAnimal,
  updateAnimal,
} from "../controllers/AnimalsController.js";
const router = express.Router();
router.get("/", getAllAnimals);
router.get("/:id", getAnimal);
router.post("/", createAnimal);
router.patch("/:id", updateAnimal);
router.delete("/:id", deleteAnimal);
export default router;
