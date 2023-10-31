
//Select Container for Content
var pageContent = document.querySelector(".page-content");
var headerContent = document.querySelector("header");

//Establish start page elements
var titleEl = document.createElement("h1");
var descriptionEl = document.createElement("p");
var start_button = document.createElement("button");
var timerEl = document.createElement("div");

//Question 1 Elements
var q1_answerContainer = document.createElement("div");
var q1_button1 = document.createElement("button");
var q1_button2 = document.createElement("button");
var q1_button3 = document.createElement("button");
var q1_button4 = document.createElement("button");

//Question 2 Elements
var q2_answerContainer = document.createElement("div");
var q2_button1 = document.createElement("button");
var q2_button2 = document.createElement("button");
var q2_button3 = document.createElement("button");
var q2_button4 = document.createElement("button");

q2_answerContainer.style.width="50%";
q2_answerContainer.style.margin="auto";

//Question 3 Elements
var q3_answerContainer = document.createElement("div");
var q3_button1 = document.createElement("button");
var q3_button2 = document.createElement("button");
var q3_button3 = document.createElement("button");
var q3_button4 = document.createElement("button");

q3_answerContainer.style.width="50%";
q3_answerContainer.style.margin="auto";

//Question 4 Elements
var q4_answerContainer = document.createElement("div");
var q4_button1 = document.createElement("button");
var q4_button2 = document.createElement("button");
var q4_button3 = document.createElement("button");
var q4_button4 = document.createElement("button");

q4_answerContainer.style.width="50%";
q4_answerContainer.style.margin="auto";

//Question 5 Elements
var q5_answerContainer = document.createElement("div");
var q5_button1 = document.createElement("button");
var q5_button2 = document.createElement("button");
var q5_button3 = document.createElement("button");
var q5_button4 = document.createElement("button");

q5_answerContainer.style.width="50%";
q5_answerContainer.style.margin="auto";

//Submit Score Elements
var enterInitials = document.createElement("input");
var submitText = document.createElement("p");
var submitButton = document.createElement("button");

submitText.textContent="Enter initials: ";
submitButton.textContent="Submit";


//Add opening page critira and display content
titleEl.textContent="Coding Quiz Challenge";
descriptionEl.textContent="This is the description";
start_button.textContent="Start Quiz";

//Add Variables for Question 1
var q1 = "Commonly used data types DO NOT include:"
var q1_Option1 = "1. Strings"
var q1_Option2 = "2. Booleans"
var q1_Option3 = "3. Alerts"
var q1_Option4 = "4. Numbers"

//Add Variables for Question 2
var q2 = "The condition in an if/else statement is enclosed within ______."
var q2_Option1 = "1. Quotes"
var q2_Option2 = "2. Curly Brackets"
var q2_Option3 = "3. Parenthesis"
var q2_Option4 = "4. Square Brackets"

//Add Variables for Question 3
var q3 = "Arrays in JavaScript can be used to  store ______."
var q3_Option1 = "1. Numbers and strings"
var q3_Option2 = "2. Booleans"
var q3_Option3 = "3. Other arrays"
var q3_Option4 = "4. All of the above"

//Add Variables for Question 4
var q4 = "String values must be enclosed within ______ when being assigned to variables."
var q4_Option1 = "1. Commas"
var q4_Option2 = "2. Quotes"
var q4_Option3 = "3. Curly Brackets"
var q4_Option4 = "4. Parenthesis"

//Add Variables for Question 5
var q5 = "A very useful tool during development and debugging for printing content to the debugger is:"
var q5_Option1 = "1. JavaScript"
var q5_Option2 = "2. Terminal"
var q5_Option3 = "3. For loop"
var q5_Option4 = "4. Console log"

pageContent.appendChild(titleEl);
pageContent.appendChild(descriptionEl);
pageContent.appendChild(start_button);
start_button.style.display="inline";

headerContent.appendChild(timerEl);

//Q2 container setup
q2_answerContainer.appendChild(q2_button1);
q2_answerContainer.appendChild(q2_button2);
q2_answerContainer.appendChild(q2_button3);
q2_answerContainer.appendChild(q2_button4);

q2_button1.textContent=q2_Option1;
q2_button2.textContent=q2_Option2;
q2_button3.textContent=q2_Option3;
q2_button4.textContent=q2_Option4;

//Q3 container setup
q3_answerContainer.appendChild(q3_button1);
q3_answerContainer.appendChild(q3_button2);
q3_answerContainer.appendChild(q3_button3);
q3_answerContainer.appendChild(q3_button4);

q3_button1.textContent=q3_Option1;
q3_button2.textContent=q3_Option2;
q3_button3.textContent=q3_Option3;
q3_button4.textContent=q3_Option4;

//Q4 container setup
q4_answerContainer.appendChild(q4_button1);
q4_answerContainer.appendChild(q4_button2);
q4_answerContainer.appendChild(q4_button3);
q4_answerContainer.appendChild(q4_button4);

q4_button1.textContent=q4_Option1;
q4_button2.textContent=q4_Option2;
q4_button3.textContent=q4_Option3;
q4_button4.textContent=q4_Option4;

//Q5 container setup
q5_answerContainer.appendChild(q5_button1);
q5_answerContainer.appendChild(q5_button2);
q5_answerContainer.appendChild(q5_button3);
q5_answerContainer.appendChild(q5_button4);

q5_button1.textContent=q5_Option1;
q5_button2.textContent=q5_Option2;
q5_button3.textContent=q5_Option3;
q5_button4.textContent=q5_Option4;

var timeLeft = 75;
timerEl.innerText = "Time: "+timeLeft;
var stopTimer = 0;

//Add timer function 
function countdown() {
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
    if (stopTimer > 0) {
        clearInterval(timeInterval);
    } else if (timeLeft > 0) {
        timeLeft--;
        timerEl.innerText = "Time: "+timeLeft;
    } else {
        clearInterval(timeInterval);
    }
    }, 1000);
  };

//Start Quiz
start_button.addEventListener("click", startQuiz = function(){
    //start countdown
    countdown();

    //update page elements
    titleEl.textContent=q1;
    pageContent.removeChild(descriptionEl);
    pageContent.removeChild(start_button);
    q1_button1.textContent=q1_Option1;
    q1_button2.textContent=q1_Option2;
    q1_button3.textContent=q1_Option3;
    q1_button4.textContent=q1_Option4;

    pageContent.appendChild(q1_answerContainer);
    q1_answerContainer.appendChild(q1_button1);
    q1_answerContainer.appendChild(q1_button2);
    q1_answerContainer.appendChild(q1_button3);
    q1_answerContainer.appendChild(q1_button4);

    q1_answerContainer.style.width="50%";
    q1_answerContainer.style.margin="auto";

});

//Question 1 button click

q1_answerContainer.addEventListener("click",function(event){
    var element = event.target;

    //IF the correct answer is selected
    if((element.matches("button") === true)&&(element.textContent===q1_Option3)) {
        console.log("Correct");
        pageContent.removeChild(q1_answerContainer);
        pageContent.appendChild(q2_answerContainer);
        titleEl.textContent=q2;

    //If the incorrect answer is selected
    } else if (element.matches("button")=== true) {
        console.log("Incorrect");
        pageContent.removeChild(q1_answerContainer);
        pageContent.appendChild(q2_answerContainer);
        titleEl.textContent=q2;
        timeLeft=timeLeft-10;
    };
});

//Question 2 button click

q2_answerContainer.addEventListener("click",function(event){
    var element = event.target;

    //IF the correct answer is selected
    if((element.matches("button") === true)&&(element.textContent===q2_Option3)) {
        console.log("Correct");
        pageContent.removeChild(q2_answerContainer);
        pageContent.appendChild(q3_answerContainer);
        titleEl.textContent=q3;

    //If the incorrect answer is selected
    } else if (element.matches("button")=== true) {
        console.log("Incorrect");
        pageContent.removeChild(q2_answerContainer);
        pageContent.appendChild(q3_answerContainer);
        titleEl.textContent=q3;
        timeLeft=timeLeft-10;
    };
});

//Question 3 button click

q3_answerContainer.addEventListener("click",function(event){
    var element = event.target;

    //IF the correct answer is selected
    if((element.matches("button") === true)&&(element.textContent===q3_Option4)) {
        console.log("Correct");
        pageContent.removeChild(q3_answerContainer);
        pageContent.appendChild(q4_answerContainer);
        titleEl.textContent=q4;

    //If the incorrect answer is selected
    } else if (element.matches("button")=== true) {
        console.log("Incorrect");
        pageContent.removeChild(q3_answerContainer);
        pageContent.appendChild(q4_answerContainer);
        titleEl.textContent=q4;
        timeLeft=timeLeft-10;
    };
});

//Question 4 button click

q4_answerContainer.addEventListener("click",function(event){
    var element = event.target;

    //IF the correct answer is selected
    if((element.matches("button") === true)&&(element.textContent===q4_Option2)) {
        console.log("Correct");
        pageContent.removeChild(q4_answerContainer);
        pageContent.appendChild(q5_answerContainer);
        titleEl.textContent=q5;

    //If the incorrect answer is selected
    } else if (element.matches("button")=== true) {
        console.log("Incorrect");
        pageContent.removeChild(q4_answerContainer);
        pageContent.appendChild(q5_answerContainer);
        titleEl.textContent=q5;
        timeLeft=timeLeft-10;
    };
});

//Question 5 button click

q5_answerContainer.addEventListener("click",function(event){
    var element = event.target;

    //IF the correct answer is selected
    if((element.matches("button") === true)&&(element.textContent===q5_Option4)) {
        console.log("Correct");
        pageContent.removeChild(q5_answerContainer);
        titleEl.textContent="All done!";
        descriptionEl.textContent="Your final score is: "+timeLeft;
        pageContent.appendChild(descriptionEl);
        pageContent.appendChild(submitText);
        pageContent.appendChild(enterInitials);
        pageContent.appendChild(submitButton);

        submitText.style.display="inline";
        enterInitials.style.display="inline";
        submitButton.style.display="inline";
        
        stopTimer=1;
        timerEl.innerText = "Time: "+timeLeft;
        descriptionEl.textContent="Your final score is: "+timeLeft;

    //If the incorrect answer is selected
    } else if (element.matches("button")=== true) {
        console.log("Incorrect");
        pageContent.removeChild(q5_answerContainer);
        titleEl.textContent="All done!";
        pageContent.appendChild(descriptionEl);
        pageContent.appendChild(submitText);
        pageContent.appendChild(enterInitials);
        pageContent.appendChild(submitButton);

        submitText.style.display="inline";
        enterInitials.style.display="inline";
        submitButton.style.display="inline";

        timeLeft=timeLeft-10;
        stopTimer=1;
        timerEl.innerText = "Time: "+timeLeft;
        descriptionEl.textContent="Your final score is: "+timeLeft;
    };
});

