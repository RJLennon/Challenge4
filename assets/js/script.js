
//Select Container for Content
var pageContent = document.querySelector(".Page-Content");

//Establish elements
var titleEl = document.createElement("h1");
var descriptionEl = document.createElement("p");
var button1 = document.createElement("button");

//Add opening page critira and display content
titleEl.textContent="Coding Quiz Challenge";
descriptionEl.textContent="This is the description";
button1.textContent="Start Quiz";

pageContent.appendChild(titleEl);
pageContent.appendChild(descriptionEl);
pageContent.appendChild(button1);

//Add event listener for the button click







