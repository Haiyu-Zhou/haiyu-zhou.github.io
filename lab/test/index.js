//Question 14
const coloredElement = document.querySelector("#colored-element");
coloredElement.style.color = "yellow";

//Question 15
const parentElement = document.querySelector("#parent-element")
const htmlElement = document.createElement('p')
htmlElement.innerHTML = "This is a new HTML element."
parentElement.appendChild(htmlElement)

//Question 16
const forLoopArray = ["Item One", "Item Two", "Item Three", "Item Four"]
for (let index = 0; index < forLoopArray.length; index++) {
    const item = forLoopArray[index];
    console.log(item);
}

//Question 17
const button = document.querySelector("#event-listener-button");
button.addEventListener("click", function() {
    console.log("Clicked");
  });