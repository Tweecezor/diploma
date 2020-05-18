const express = require("express");
const PORT = 3002 || process.env.PORT;
const mongoose = require("mongoose");
const path = require("path");
const { mongoURL } = require("./server/config");
const routesAPI = require("./server/routes");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static(path.join(__dirname, "dist")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", routesAPI);
// app.get("*", (req, res) => {
//   res.send(path.resolve(path.join("dist", "index.html")));
// });
async function start() {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      // console.log(routesAPI);
      console.log("server has been started on port " + PORT);
    });
  } catch (e) {
    console.log(e);
  }
}
start();
