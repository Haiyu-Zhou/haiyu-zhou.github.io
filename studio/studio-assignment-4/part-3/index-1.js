//step 1: variables
const airtableApiKey = "keyBaUp0xKPE8ASU2";
const airtableDatabaseUrl =
  "https://api.airtable.com/v0/appJdJtWiN8zcCYC4/Table%201";
const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey;

//step 2: get references to DOM
const leftPawContainer = document.querySelector("#left-paw");
const rightPawContainer = document.querySelector("#right-paw");

//step 3: application
//fetch the data
const fetchPromise = fetch(authenticatedUrl);
const jsonPromise = fetchPromise.then((response) => {
  return response.json();
});
//get each set of images into their containers
jsonPromise.then((data) => {
  console.log(data);
  const records = data.records;
  for (let index = 0; index < records.length; index++) {
    const title = records[index].fields.Title;
    const imageUrl = records[index].fields.Assets[0].url;
    const tags = records[index].fields.Tags;
    //const number = records[index];
    //create container element
    const containerElement = document.createElement("div");
    containerElement.classList.add("container");
    //create image element
    const imageElement = document.createElement("img");
    imageElement.classList.add("paw-image");
    //imageElement.setAttribute('id', number);
    imageElement.setAttribute("src", imageUrl);
    imageElement.style.position = "absolute";
    //add different id to each images
    records.forEach((item, i) => {
      item.id = i + 1;
    });
    const id = records[index].id;
    imageElement.setAttribute("id", id);
    //add container element to DOM
    //add image element in containers
    //add left paw images to containers
    if (tags.includes("left")) {
      leftPawContainer.appendChild(containerElement);
      containerElement.appendChild(imageElement);
    }
    //add right paw images to containers
    else if (tags.includes("right")) {
      rightPawContainer.appendChild(containerElement);
      containerElement.appendChild(imageElement);
    }
  }
});

function logMessage(message) {
  console.log(message);
}

function changeVisibility() {
    //const records = document.records;
    //for (let index = 0; index < records.length; index++) {
        leftPawContainer.style.visibility = "hidden";
   // }
}

let currentIndex = 0;
setInterval(() => {
 leftPawContainer.setAttribute("src", imageUrl); 
  currentIndex++;
  if (currentIndex === 4)
   currentIndex = 0;
}, 500 * (currentIndex+1))


document.addEventListener("keydown", (e) => {
  if (!e.repeat) logMessage(`Key "${e.key}" pressed  [event: keydown]`);
  else {
    logMessage(`Key "${e.key}" repeating  [event: keydown]`);
    leftPawContainer = setInterval(changeVisibility, 500);
  }
});


// this works, but repeat itself every time I press the key
document.addEventListener("keydown", (e) => {
  if (!e.repeat) {
    logMessage(`Key "${e.key}" pressed  [event: keydown]`);
    if (e.code == 'KeyZ'){
      const interval = setInterval(() => {
        if (id === numberOfFrames) {
          id = 0;
        } else {
          id = id + 1;
        }
        console.log(id);
        let imageUrl = "assets/" + id + ".jpg";
        leftPawContainer.setAttribute("src", imageUrl);
        leftPawContainer.style.display = "block";
      }, 500);
    }
  }
  else {
    logMessage(`Key "${e.key}" repeating  [event: keydown]`);
  }
  
});


clearInterval(interval);



document.addEventListener("keydown", (e) => {
  if (!e.repeat) {
    logMessage(`Key "${e.key}" pressed  [event: keydown]`);
    if (e.code == 'KeyZ'){
      const interval = setInterval(() => {
        if (id === numberOfFrames) {
          id = 0;
        } else {
          id = id + 1;
        }
        console.log(id);
        let imageUrl = "assets/" + id + ".jpg";
        leftPawContainer.setAttribute("src", imageUrl);
        leftPawContainer.style.display = "block";
      }, 500);
     
    }
  }
  else {
    logMessage(`Key "${e.key}" repeating  [event: keydown]`);
  }
  
});
