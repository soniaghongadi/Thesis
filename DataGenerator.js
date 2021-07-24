//Function to generate random number
function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  const currentDate = new Date();

  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
  const currentYear = currentDate.getFullYear();
  
  const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

//Returns a random number between 0 and 100
console.log(getRandomBetween(0,100));
console.log(dateString);
console.log(getRandomBetween(0,100) + " generated at " + dateString)
