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

async function checkVisited(){
  var countries = [];
  try {
    const result = await db.query("SELECT country_code FROM visited_countries");
    result.rows.forEach((country) => countries.push(country.country_code));
  } catch (err) {
    console.error("Error executing query", err.stack);
  }
  return countries;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  const countries_to_map = await checkVisited();
  res.render("index.ejs", { 
    countries: countries_to_map,
    total: countries_to_map.length
  });
});

app.post("/add", async (req, res) => {
  const country_name =  req.body.country;
  try {
    const result = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE  '%' || $1 || '%';", [country_name.toLowerCase()]);
    const data = result.rows[0];
    const country_code = data.country_code;
    try {
      await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [country_code]);
      res.redirect("/")
    } catch (err) {
      var message = "You already added the country. Try again.";
      console.log(err);
      const countries_to_map = await checkVisited();
      res.render("index.ejs", { 
        countries: countries_to_map,
        total: countries_to_map.length,
        error:  message
      });
    }
  } catch (err) {
    var message = "We couldn't find the country. Try again.";
    console.log(err);
    const countries_to_map = await checkVisited();
    res.render("index.ejs", { 
      countries: countries_to_map,
      total: countries_to_map.length,
      error:  message
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
