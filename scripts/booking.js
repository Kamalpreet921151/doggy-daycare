/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 35; //Initial cost per day
let dayCounter = 0; //initial countof selected days


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// Get all the list items
let dayList = document.querySelectorAll('.day-selector li');

// Function to handle click events for each day
function handleClick(day) {
  return function () {
    // Toggle the "clicked" class on the clicked list item
    day.classList.toggle('clicked');
    // Event listeners for updating counters and recalculating cost
    dayCount();
    recalculate();
  };
}

// Loop through each list item and add click event listener
for (let i = 0; i < dayList.length; i++) {
  let day = dayList[i];
  day.addEventListener('click', handleClick(day));
}

// Function to update dayCounter based on clicked days
function dayCount() {
  dayCounter = 0;
  for (let i = 0; i < dayList.length; i++) {
    let day = dayList[i];
    if (day.classList.contains("clicked")) {
      dayCounter++;
    }
  }
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function removeStyle(){
    for (let i = 0; i < dayList.length; i++) {
        let day = dayList[i];
        day.classList.remove("clicked");
    }
}


let clearButton = document.getElementById("clear-button");
clearButton.addEventListener('click',removeStyle);
clearButton.addEventListener('click',dayCount);
clearButton.addEventListener('click',recalculate);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let halfButton = document.getElementById("half");

function halfButtonOn() {
    costPerDay=20;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    recalculate();
 }

 halfButton.addEventListener("click",halfButtonOn);



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
// add the "clicked" class to "full", remove it from "half", and recalculate the total cost.
let fullButton = document.getElementById("full");

function fullButtonOn() {
    costPerDay=35;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    recalculate();
}

fullButton.addEventListener("click",fullButtonOn);





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate() {

    let costLabel = document.getElementById("calculated-cost");

    let totalCost = costPerDay * dayCounter;

    costLabel.innerHTML = totalCost;
}
