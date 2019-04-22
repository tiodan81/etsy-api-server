const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const https = require("https");

dotenv.config();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

app.get("/listings/:id", (req, res) => {
  const id = req.params.id;
  https.get(
    `https://openapi.etsy.com/v2/listings/${id}?api_key=${
      process.env.ETSY_KEY
    }`,
    response => {
      let output = "";

      response.on("data", data => {
        output += data;
      });

      response.on("end", () => {
        res.status(200).json(output.toString("utf8"));
      });
    }
  );
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
