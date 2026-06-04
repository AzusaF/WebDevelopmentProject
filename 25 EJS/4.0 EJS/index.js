import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var isWeekend = false;

function weekendFinder(req, res, next) {
   const d = new Date();  
   let day = d.getDay(); 
   if(day === 0 || day === 6){
      isWeekend = true;
   }
   next();
}

app.use(weekendFinder);

app.get("/", (req, res) => {
   if(isWeekend){
      res.render(`${__dirname}/views/index.ejs`, {isWeekend: isWeekend, day: "the weekend", advice: "relax"});
   } else {
      res.render(`${__dirname}/views/index.ejs`, {isWeekend: isWeekend, day: "a weekday", advice: "work"});
   }
});

app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});
