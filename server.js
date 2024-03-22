const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); // disable cross-origin resource sharing

app.listen(3000, () => {
  console.log("Listening to port 3000");
});

app.get("/getWeatherOfACityByName", (req, res) => {
  x = undefined;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.query.cname}&appid=c7d165e519e048c61790dbe75f100514&units=metric`
  )
    .then((resp) => resp.json())
    .then((resp) => {
      res.json(resp);
    });
});