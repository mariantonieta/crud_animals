import AnimalsModel from "../models/AnimalsModel.js";
export const getAllAnimals = async (req, res) => {
  try {
    const animals = await AnimalsModel.findAll();
    res.json(animals);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const getAnimal = async (req, res) => {
  try {
    const animal = await AnimalsModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(animal[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const createAnimal = async (req, res) => {
  try {
    await AnimalsModel.create(req.body);
    res.json({
      message: "The animal is created succefull",
    });
  } catch (error) {
    res.json({ message: message.error });
  }
};
export const updateAnimal = async (req, res) => {
  try {
    await AnimalsModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "The animal is updated is correctly",
    });
  } catch (error) {
    res.json({
      message: message.error,
    });
  }
};
export const deleteAnimal = async (req, res) => {
  try {
    await AnimalsModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "The animal is deleted",
    });
  } catch (error) {
    res.json({ message: message.error });
  }
};
