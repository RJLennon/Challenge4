
//Select Container for Content
var pageContent = document.querySelector(".page-content");

//Establish elements
var titleEl = document.createElement("h1");
var descriptionEl = document.createElement("p");
var answerContainer = document.createElement("div");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");

//Add opening page critira and display content
titleEl.textContent="Coding Quiz Challenge";
descriptionEl.textContent="This is the description";
button1.textContent="Start Quiz";

//Add Variables for Question 1
var q1 = "This is Question 1"
var q1_Option1 = "This is choice 1"
var q1_Option2 = "This is choice 2"
var q1_Option3 = "This is choice 3"
var q1_Option4 = "This is choice 4"

//Add Variables for Question 2

pageContent.appendChild(titleEl);
pageContent.appendChild(descriptionEl);
pageContent.appendChild(button1);

//Add event listener for the button click

button1.addEventListener("click", startQuiz = function(){
    titleEl.textContent=q1;
    pageContent.removeChild(descriptionEl);
    pageContent.removeChild(button1);
    button1.textContent=q1_Option1;
    button2.textContent=q1_Option2;
    button3.textContent=q1_Option3;
    button4.textContent=q1_Option4;

    pageContent.appendChild(answerContainer);
    answerContainer.appendChild(button1);
    answerContainer.appendChild(button2);
    answerContainer.appendChild(button3);
    answerContainer.appendChild(button4);

    button1.style.display="block";
    button2.style.display="block";
    button3.style.display="block";
    button4.style.display="block";

    answerContainer.style.width="50%";
    answerContainer.style.margin="auto";

    answerContainer.addEventListener("click",function(){
        alert("hello world");
    });

});


    




