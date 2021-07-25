
const csv = require('csv-parser');
const fs = require('fs');

//console.log(newString);


function generateData() {

  //=================Function to generate random number======================
  function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  const currentDate = new Date();
  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  //===================Concat the time and date ==========================================
  const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear + " Current Time: " + time;

 //===================Returns a random number between 0 and 100==================
  //console.log(getRandomBetween(0,100));
  //console.log(dateString);
  const newString = getRandomBetween(0, 100) + " generated at " + dateString + "\n"

  //fs.writeFileSync("data.csv", newString);
  //=================Append data to CSV file======================================
  fs.appendFileSync("data.csv", newString);
}

let display = setInterval(generateData, 5000);



