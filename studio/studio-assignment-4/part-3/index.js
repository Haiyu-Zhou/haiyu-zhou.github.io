const list = ['1','2','3']


let leftPawContainer = document.querySelector("#left-paw");
let id = 1;
const numberOfFrames = 4


const interval = setInterval(() => {
  if(id === numberOfFrames) {
    id = 1
  } else {
    id = id++
  }
  const imageUrl = "assets/" + id + ".jpg"
  leftPawContainer.setAttribute('src', imageUrl)
}, 3000)


function logMessage(message) {
    console.log(message);
  }

document.addEventListener("keydown", (e) => {
    if (!e.repeat) logMessage(`Key "${e.key}" pressed  [event: keydown]`);
    else {
      logMessage(`Key "${e.key}" repeating  [event: keydown]`);
      interval;
    }
  });

