const express = require("express");

const router = express.Router();

const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

router.get("/", (req, res) => {
  const recipe = firestore.getDocs(firestore.collection(db, "blogposts"));
  const recipeArray = [];

  recipe
    .then((response) => {
      response.forEach((doc) => {
        recipeArray.push(doc.data());
      });
      return res.send(recipeArray);
    })
    .catch(function (error) {
      console.log("Error", error);
      return res.send(error);
    });
});

module.exports = router;
