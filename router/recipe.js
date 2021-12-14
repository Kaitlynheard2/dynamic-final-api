const express = require("express");
const router = express.Router();

const firestore = require("firebase/firestore");

const db = firestore.getFirestore();

//accessible at /recipe/:id
router.get("/:id", (req, res) => {
  const postId = req.params.id;
  const blogpost = firestore.getDoc(firestore.doc(db, "recipe", postId));
  blogpost
    .then((response) => {
      const post = response.data();
      if (post) return res.send(post);
      return res.send(`no recipe...... sorry`);
    })
    .catch((error) => {
      res.send("No recipe... sorry");
    });
});

router.get("/", (req, res) => {
  res.send("Please include an ID");
});

module.exports = router;
