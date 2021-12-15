const express = require("express");
const router = express.Router();

const firestore = require("firebase/firestore");

const db = firestore.getFirestore();

router.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  const q = firestore.query(
    firestore.collection(db, "recipe"),
    firestore.where("userId", "==", userId)
  );

  const querySnapshot = firestore.getDocs(q);

  const userPosts = [];

  querySnapshot
    .then((response) => {
      response.forEach((doc) => {
        userPosts.push(doc.data());
      });
      return res.send(userPosts);
    })
    .catch((error) => {
      return res.send(error);
    });
});

module.exports = router;
