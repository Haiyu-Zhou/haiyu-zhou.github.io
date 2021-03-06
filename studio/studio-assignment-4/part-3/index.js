let leftPawContainer = document.querySelector("#left-paw");
let id = 0;
const numberOfFrames = 2;

//show which key is being pressed
function logMessage(message) {
  console.log(message);
}

//function inside setInterval
const runAnimation = () => {
    if (id === numberOfFrames) {
      id = 0;
    } else {
      id = id + 1;
    }
    console.log(id);
    let imageUrl = "assets/" + id + ".jpg";
    leftPawContainer.setAttribute("src", imageUrl);
}

//create a reference outside the bracket
let interval; 


//start animation when pressing
document.addEventListener("keydown", (e) => {
  if (e.defaultPrevented) {
    return;
  }
  if (!e.repeat) {
    logMessage(`Key "${e.key}" pressed  [event: keydown]`);
    if (e.code == 'KeyZ'){
      interval = setInterval(runAnimation, 150);
    }
  }
  else {
    logMessage(`Key "${e.key}" repeating  [event: keydown]`);
  }
  e.preventDefault();
});

//end animation when released
document.addEventListener("keyup", (e) => {
  if (e.code == 'KeyZ'){
    clearInterval(interval);
    console.log("key z released");
  }
})


//clearInterval needs reference outside the bracket, so it didn't work when I was directly reference from the function itself.
