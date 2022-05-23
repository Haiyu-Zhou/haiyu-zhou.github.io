const keyboardEventElement = document.querySelector('div#keyboard')
const keyboardFeedbackElement = document.querySelector('div#keyboard-feedback')
const inputEventElement = document.querySelector('form#input')
const inputElement = document.querySelector('form#input input')

const inputFeedbackElement = document.querySelector('div#input-feedback')

keyboardEventElement.addEventListener('keydown' , (event) => {
    //create a feedback element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "key Pressed:" + event.keyboardEventElement
    //add feedback elemnt to page
    keyboardFeedbackElement.appendChild(feedbackElement)
    console.log(feedbackElement)
})

console.log(keyboardEventElement)



inputEventElement.addEventListener('submit', (event) => {
console.log('submit')
//prevent data gone
event.preventDefault()
//get form value
const value = inputElement.value
//create a new element
const feedbackElement = document.createElement('p')
feedbackElement.innerHTML = "- " + value
//add to page
inputFeedbackElement.appendChild(feedbackElement)
inputElement.value =""
})

const soundElement = document.querySelector("#sound");

document.addEventListener('keydown' , (event) => {
    if(event.key === "Enter") {
        soundElement.innerHTML = "<audio controls src=\"assets/pencil.wav\" autoplay>";
                            }
})
