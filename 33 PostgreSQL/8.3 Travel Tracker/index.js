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

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  var countries_to_map = [];
  try {
    const result = await db.query("SELECT country_code FROM visited_countries");
    result.rows.forEach((country) => countries_to_map.push(country.country_code));
  } catch (err) {
    console.error("Error executing query", err.stack);
  }
  res.render("index.ejs", { 
    countries: countries_to_map,
    total: countries_to_map.length
  });
});

app.post("/add", async (req, res) => {
  const country_name =  capitalize(req.body.country);
  const result = await db.query("SELECT country_code FROM countries WHERE country_name = $1", [country_name]);
  const data = result.rows[0];
  const country_code = data.country_code;
  await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [country_code]);
  res.redirect("/")
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
