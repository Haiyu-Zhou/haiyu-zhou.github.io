let leftPawContainer = document.querySelector("#left-paw");
let id = 0;
const numberOfFrames = 2;
let value = false;


//show which key is being pressed
function logMessage(message) {
  console.log(message);
}





function once(fn, context) { 
  var result;
  return function() { 
      if (fn) {
          result = fn.apply(context);
          fn = context = null;
      }
      return result;
  };
}


const interval = function(){setInterval(() => {
  if (id === numberOfFrames) {
    id = 0;
  } else {
    id = id + 1;
  }
  console.log(id);
  let imageUrl = "assets/" + id + ".jpg";
  leftPawContainer.setAttribute("src", imageUrl);
}, 500);
//if the interval is stopped, restart it...
//if (leftPawContainer.style.visibility = "hidden") {
 // leftPawContainer.style.visibility = "visible"}
}

//start animation when pressing
//key z as an example
document.addEventListener("keydown", (e) => {
  if (!e.repeat) {
    logMessage(`Key "${e.key}" pressed  [event: keydown]`);
    if (e.code == 'KeyZ'){
      interval();
    }
  }
  else {
    logMessage(`Key "${e.key}" repeating  [event: keydown]`);
  }
});

//end animation when released
//the animation only disappear a short while
document.addEventListener("keyup", (e) => {
  if (e.code == 'KeyZ'){
    clearInterval(interval);
    console.log("key z released");
  }
})


//how to do only one animation while pressing the keyboard, and stop animation when release.
//callback once?
