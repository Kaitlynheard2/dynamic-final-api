const express = require("express");
const router = express.Router();

const firestore = require("firebase/firestore");

const db = firestore.getFirestore();

//accessible at /recipe/:id
router.get("/:id", (req, res) => {
  const recipeId = req.params.id;
  const recipePost = firestore.getDoc(firestore.doc(db, "recipe", recipeId));
  recipePost
    .then((response) => {
      const post = response.data();
      if (post) return res.send(post);
      return res.send(`no recipe...... sorry`);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/", (req, res) => {
  res.send("Please include an ID");
});

module.exports = router;
