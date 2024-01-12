import express from "express";

const app = express();

const router = express.Router();

router.get("/a", (req, res) => {
  res.send("a url has been invoked in simple express");
});

app.use(router);

app.listen(3005, () => {
  console.log("a url has benn invoked on port 3005");
});
