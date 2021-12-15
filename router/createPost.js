const express = require("express");
const router = express.Router();

const firestore = require("firebase/firestore");

const db = firestore.getFirestore();

router.get("/", (req, res) => {
  const queryParams = req.query;
  const {
    imgSrc,
    ingredients,
    imgAlt,
    cookTime,
    recipeDirections,
    recipeName,
    servingSize,
    userID,
    userName,
  } = queryParams;

  const setRecipe = firestore.addDoc(firestore.collection(db, "recipe"), {
    imgSrc,
    ingredients,
    imgAlt,
    cookTime,
    recipeDirections,
    recipeName,
    servingSize,
    userID,
    userName,
  });

  setRecipe
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.warn(error);
      res.send(error);
    });
});

module.exports = router;
