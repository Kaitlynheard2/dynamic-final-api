const express = require("express");
const router = express.Router();

const firestore = require("firebase/firestore");

const db = firestore.getFirestore();

//router.get("/", (req, res) => {
// res.send(form);
//});

router.get("/submit", (req, res) => {
  const queryParams = req.query;
  const { image, alt, cooktime, directions, title, servingSize, userID } =
    queryParams;

  const setRecipe = firestore.addDoc(firestore.collection(db, "recipe"), {
    image,
    alt,
    cooktime,
    directions,
    title,
    servingSize,
    userID,
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
