//Array for vero and falsos imported from test array by map() function 
let veroOrFalse = test.map(item=>item.veroOrFalso);
// empty array for doubled numbers of veros and falsos
let doubleVeroOrFalso = [];
//check button variable 
//varibale for show button 
let showBtn= document.getElementById("show-answers");
let checkButton = document.getElementById("check-button");
//input variable
let inputs = document.querySelectorAll('input[type="radio"]');
//td variable
let tds = document.getElementsByName("tds");
//variable for score 
let scoreSpan = document.getElementById("score-span");
//variable for total number of questions
let totalNumberOfQuestions = document.getElementById("totalNumberOfQuestions");

