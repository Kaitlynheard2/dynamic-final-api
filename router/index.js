const express = require("express");

const router = express.Router();

const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

router.get("/", (req, res) => {
  const recipe = firestore.getDocs(firestore.collection(db, "recipe"));
  const recipeArray = [];

  recipe
    .then((response) => {
      response.forEach((doc) => {
        console.log(doc.id);
        const docData = doc.data();
        docData.id = doc.id;
        recipeArray.push(docData);
      });
      return res.send(recipeArray);
    })
    .catch(function (error) {
      console.log("Error:", error);
      return res.send(error);
    });
});

module.exports = router;
