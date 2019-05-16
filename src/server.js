const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "783925",
  key: "0160d7695d4642fb82aa",
  secret: "d63dd8017a9a86c65f2a",
  cluster: "eu",
  encrypted: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.get("/message", (req, res) => {
  pusher.trigger("messages", "message_added", { message: "dit is een test" });
  res.status(200).send();
});

const port = 5000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
