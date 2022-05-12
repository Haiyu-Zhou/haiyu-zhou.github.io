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
    // 1st line
    if (e.code == 'KeyQ'){
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == 'KeyW'){
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == 'KeyE'){
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == 'KeyR'){
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == 'KeyT'){
      interval = setInterval(runAnimation, 150);
    }
    // 2nd line
    if (e.code == 'KeyA'){
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == 'KeyS'){
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == 'KeyD'){
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == 'KeyF'){
      interval = setInterval(runAnimation, 150);
    }
    // 3rd line
    if (e.code == 'KeyZ'){
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == 'KeyX'){
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == 'KeyC'){
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == 'KeyV'){
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
  // 1
  if (e.code == 'KeyQ'){
    clearInterval(interval);
    console.log("key Q released");
  }
  if (e.code == 'KeyW'){
    clearInterval(interval);
    console.log("key W released");
  }
  if (e.code == 'KeyE'){
    clearInterval(interval);
    console.log("key E released");
  }
  if (e.code == 'KeyR'){
    clearInterval(interval);
    console.log("key R released");
  }
  if (e.code == 'KeyT'){
    clearInterval(interval);
    console.log("key T released");
  }
  // 2
  if (e.code == 'KeyA'){
    clearInterval(interval);
    console.log("key A released");
  }
  if (e.code == 'KeyS'){
    clearInterval(interval);
    console.log("key S released");
  }
  if (e.code == 'KeyD'){
    clearInterval(interval);
    console.log("key D released");
  }
  if (e.code == 'KeyF'){
    clearInterval(interval);
    console.log("key F released");
  }
  // 3
  if (e.code == 'KeyZ'){
    clearInterval(interval);
    console.log("key Z released");
  }
  if (e.code == 'KeyX'){
    clearInterval(interval);
    console.log("key X released");
  }
  if (e.code == 'KeyC'){
    clearInterval(interval);
    console.log("key C released");
  }
  if (e.code == 'KeyV'){
    clearInterval(interval);
    console.log("key V released");
  }
})


let rightPawContainer = document.querySelector("#right-paw");
let ID = 0;
const numberOfFramesA = 9;

const runAnimationA = () => {
  if (ID === numberOfFramesA) {
    ID = 0;
  } else {
    ID = ID + 1;
  }
  console.log(ID);
  let imageUrl = "assets/" + ID + ".png";
  rightPawContainer.setAttribute("src", imageUrl);
  rightPawContainer.style.transform = "scaleX(-1)";
}

//create a reference outside the bracket
let intervalA; 

// right paw
document.addEventListener("keydown", (e) => {
  if (e.defaultPrevented) {
    return;
  }
  if (!e.repeat) {
    logMessage(`Key "${e.key}" pressed  [event: keydown]`);
    // 1st line
    if (e.code == 'KeyY'){
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == 'KeyU'){
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == 'KeyI'){
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == 'KeyO'){
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == 'KeyP'){
      intervalA = setInterval(runAnimationA, 150);
    }
    // 2nd line
    if (e.code == 'KeyG'){
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == 'KeyH'){
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == 'KeyJ'){
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == 'KeyK'){
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == 'KeyL'){
      intervalA = setInterval(runAnimationA, 150);
    }
    // 3rd line
    if (e.code == 'KeyB'){
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == 'KeyN'){
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == 'KeyM'){
      intervalA = setInterval(runAnimationA, 150);
    }
  }
  else {
    logMessage(`Key "${e.key}" repeating  [event: keydown]`);
  }
  e.preventDefault();
});

