const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const firebase = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyBHBeLqzcSum74kLiQp69xCrF_auunLm5I",
  authDomain: "om-nom-nomz.firebaseapp.com",
  projectId: "om-nom-nomz",
  storageBucket: "om-nom-nomz.appspot.com",
  messagingSenderId: "284747998835",
  appId: "1:284747998835:web:fe0b0fd6f35f4555bcec06",
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require("./router/index");
const createPostRoute = require("./router/createPost");
const recipeRoute = require("./router/recipe");
const getPostsRoute = require("./router/getAllUserPosts.js");

//corps
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Pass to next layer of middleware
  next();
});

app.use("/", indexRoute);
app.use("/create", createPostRoute);
app.use("/recipe", recipeRoute);
app.use("/posts", getPostsRoute);

app.listen(port, () => {
  console.log(`App is listening on port ${port}.`);
});
