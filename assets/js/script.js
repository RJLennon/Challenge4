
//Select Container for Content
var pageContent = document.querySelector(".page-content");

//Establish start page elements
var titleEl = document.createElement("h1");
var descriptionEl = document.createElement("p");
var start_button = document.createElement("button");

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

//Add opening page critira and display content
titleEl.textContent="Coding Quiz Challenge";
descriptionEl.textContent="This is the description";
start_button.textContent="Start Quiz";

//Add Variables for Question 1
var q1 = "This is Question 1"
var q1_Option1 = "This is question 1, choice 1"
var q1_Option2 = "This is question 1, choice 2"
var q1_Option3 = "This is question 1, choice 3"
var q1_Option4 = "This is question 1, choice 4"

//Add Variables for Question 2
var q2 = "This is Question 2"
var q2_Option1 = "This is question 2, choice 1"
var q2_Option2 = "This is question 2, choice 2"
var q2_Option3 = "This is question 2, choice 3"
var q2_Option4 = "This is question 2, choice 4"


pageContent.appendChild(titleEl);
pageContent.appendChild(descriptionEl);
pageContent.appendChild(start_button);
start_button.style.display="inline";

//Add event listener for the button click



start_button.addEventListener("click", startQuiz = function(){
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

q1_answerContainer.addEventListener("click",function(event){
    var element = event.target;
    if((element.matches("button") === true)&&(element.textContent===q1_Option4)) {
        console.log("Correct");
        pageContent.removeChild(q1_answerContainer);
    } else if (element.matches("button")=== true) {
        console.log("Incorrect");
        pageContent.removeChild(q1_answerContainer);
    };
});




