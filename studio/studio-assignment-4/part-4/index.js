let leftPawContainer = document.querySelector("#left-paw");
let id = 0;
const numberOfFrames = 9;

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
    let imageUrl = "assets/" + id + ".png";
    leftPawContainer.setAttribute("src", imageUrl);
}

//create a reference outside the bracket
let interval; 

//clearInterval needs reference outside the bracket, so it didn't work when I was directly reference from the function itself.

//start animation when pressing
//Key D 
document.addEventListener("keydown", (e) => {
  if (e.defaultPrevented) {
    return;
  }
  if (!e.repeat) {
    logMessage(`Key "${e.key}" pressed  [event: keydown]`);
    if (e.code == 'KeyD'){
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
  if (e.code == 'KeyD'){
    clearInterval(interval);
    console.log("key D released");
  }
})


//Key S
document.addEventListener("keydown", (e) => {
  console.log(e)
  if (e.defaultPrevented) {
    return;
  }
  if (!e.repeat) {
    logMessage(`Key "${e.key}" pressed  [event: keydown]`);
    console.log(e)
    if (e.code == 'KeyS'){
      console.log('test')
      interval = setInterval(runAnimation, 200);
    }
  }
  else {
    logMessage(`Key "${e.key}" repeating  [event: keydown]`);
  }
  e.preventDefault();
});
//end animation when released
document.addEventListener("keyup", (e) => {
  if (e.code == 'KeyS'){
    clearInterval(interval);
    console.log("key S released");
  }
})





