// const express = require("express");
// const app = express();
// const port = 3000;

// const connect = require("./schemas");
// const goodsRouter = require("./routes/goods");
// const cartsRouter = require("./routes/carts");

// connect();

// app.use(express.json());

// app.use("/api", [goodsRouter, cartsRouter]);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(port, "포트로 서버가 열렸어요!");
// });

const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/shopping-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const app = express();
const router = express.Router();

app.use("/api", express.urlencoded({ extended: false }), router);
app.use(express.static("assets"));

app.listen(8080, () => {
  console.log("서버가 요청을 받을 준비가 됐어요");
});
