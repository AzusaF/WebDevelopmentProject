import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
const port = 3000;
dotenv.config({path: "secret.env"});

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: process.env.PASSWORD,
  port: 5432
});

db.connect();

var visited_countries = [];
console.log(visited_countries.country_code);

db.query("SELECT * FROM visited_countries", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    visited_countries = res.rows;
  }
  db.end();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  var countries_to_map = [];
  visited_countries.forEach((country) => countries_to_map.push(country.country_code))
  res.render("index.ejs", { 
    countries: countries_to_map,
    total: countries_to_map.length
   });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
