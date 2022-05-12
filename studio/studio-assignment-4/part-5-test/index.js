let leftPawContainer = document.querySelector("#left-paw");

let id = 0;
const numberOfFrames = 9;

let rightPawContainer = document.querySelector("#right-paw");
let IDA = 0;
const numberOfFramesA = 9;

const runAnimationA = () => {
  if (IDA === numberOfFramesA) {
    IDA = 0;
  } else {
    IDA = IDA + 1;
  }
  console.log(IDA);
  let imageUrl = "assets/right/" + IDA + ".png";
  rightPawContainer.setAttribute("src", imageUrl);
};
console.log(IDA);
//create a reference outside the bracket
let intervalA;

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
  let imageUrl = "assets/left/" + id + ".png";
  leftPawContainer.setAttribute("src", imageUrl);
};

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

    //left paw
    // 1st line
    if (e.code == "KeyQ") {
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == "KeyW") {
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == "KeyE") {
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == "KeyR") {
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == "KeyT") {
      interval = setInterval(runAnimation, 150);
    }
    // 2nd line
    if (e.code == "KeyA") {
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == "KeyS") {
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == "KeyD") {
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == "KeyF") {
      interval = setInterval(runAnimation, 150);
    }
    // 3rd line
    if (e.code == "KeyZ") {
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == "KeyX") {
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == "KeyC") {
      interval = setInterval(runAnimation, 150);
    }
    if (e.code == "KeyV") {
      interval = setInterval(runAnimation, 150);
    }

    //right paw
    // 1st line
    if (e.code == "KeyY") {
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == "KeyU") {
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == "KeyI") {
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == "KeyO") {
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == "KeyP") {
      intervalA = setInterval(runAnimationA, 150);
    }
    // 2nd line
    if (e.code == "KeyG") {
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == "KeyH") {
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == "KeyJ") {
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == "KeyK") {
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == "KeyL") {
      intervalA = setInterval(runAnimationA, 150);
    }
    // 3rd line
    if (e.code == "KeyB") {
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == "KeyN") {
      intervalA = setInterval(runAnimationA, 150);
    }
    if (e.code == "KeyM") {
      intervalA = setInterval(runAnimationA, 150);
    }
  } else {
    logMessage(`Key "${e.key}" repeating  [event: keydown]`);
  }
  e.preventDefault();
});
//end animation when released
document.addEventListener("keyup", (e) => {
  // 1
  if (e.code == "KeyQ") {
    clearInterval(interval);
    console.log("key Q released");
  }
  if (e.code == "KeyW") {
    clearInterval(interval);
    console.log("key W released");
  }
  if (e.code == "KeyE") {
    clearInterval(interval);
    console.log("key E released");
  }
  if (e.code == "KeyR") {
    clearInterval(interval);
    console.log("key R released");
  }
  if (e.code == "KeyT") {
    clearInterval(interval);
    console.log("key T released");
  }
  // 2
  if (e.code == "KeyA") {
    clearInterval(interval);
    console.log("key A released");
  }
  if (e.code == "KeyS") {
    clearInterval(interval);
    console.log("key S released");
  }
  if (e.code == "KeyD") {
    clearInterval(interval);
    console.log("key D released");
  }
  if (e.code == "KeyF") {
    clearInterval(interval);
    console.log("key F released");
  }
  // 3
  if (e.code == "KeyZ") {
    clearInterval(interval);
    console.log("key Z released");
  }
  if (e.code == "KeyX") {
    clearInterval(interval);
    console.log("key X released");
  }
  if (e.code == "KeyC") {
    clearInterval(interval);
    console.log("key C released");
  }
  if (e.code == "KeyV") {
    clearInterval(interval);
    console.log("key V released");
  }

  //right paw
  // 1
  if (e.code == "KeyY") {
    clearInterval(intervalA);
    console.log("key Y released");
  }
  if (e.code == "KeyU") {
    clearInterval(intervalA);
    console.log("key U released");
  }
  if (e.code == "KeyI") {
    clearInterval(intervalA);
    console.log("key I released");
  }
  if (e.code == "KeyO") {
    clearInterval(intervalA);
    console.log("key O released");
  }
  if (e.code == "KeyP") {
    clearInterval(intervalA);
    console.log("key P released");
  }
  // 2
  if (e.code == "KeyG") {
    clearInterval(intervalA);
    console.log("key G released");
  }
  if (e.code == "KeyH") {
    clearInterval(intervalA);
    console.log("key H released");
  }
  if (e.code == "KeyJ") {
    clearInterval(intervalA);
    console.log("key J released");
  }
  if (e.code == "KeyK") {
    clearInterval(intervalA);
    console.log("key K released");
  }
  if (e.code == "KeyL") {
    clearInterval(intervalA);
    console.log("key L released");
  }
  // 3
  if (e.code == "KeyB") {
    clearInterval(intervalA);
    console.log("key B released");
  }
  if (e.code == "KeyN") {
    clearInterval(intervalA);
    console.log("key N released");
  }
  if (e.code == "KeyM") {
    clearInterval(intervalA);
    console.log("key M released");
  }
});


const backgroundImage = document.querySelector("#background");
const changeButton = document.querySelector("#change");
let img = 0;
const imgNumber = 4;

changeButton.addEventListener("click", function() {
  if (img === imgNumber ) {
    img = 0;
  } else {
    img = img + 1;
  }
  console.log(img);
  let imageUrl = "assets/blanket/" + img + ".jpg";
  backgroundImage.setAttribute("src", imageUrl);
})