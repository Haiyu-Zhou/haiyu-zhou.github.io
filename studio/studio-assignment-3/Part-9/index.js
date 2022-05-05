//step 1: variables
const airtableApiKey = "keyBaUp0xKPE8ASU2";
const airtableDatabaseUrl =
  "https://api.airtable.com/v0/app5dZBBB4148mWB9/Assets";
const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey;

//step 2: get references to DOM
const headContainerElement = document.querySelector("#head");
const bodyContainerElement = document.querySelector("#body");
const handsContainerElement = document.querySelector("#hands");
const feetContainerElement = document.querySelector("#feet");
const designerName = document.querySelector("#designer");
const collectorName = document.querySelector("#collector");
const titleName = document.querySelector("title");

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
    //create container element
    const containerElement = document.createElement("div");
    containerElement.classList.add("container");
    const randomLeft = Math.random() * window.innerWidth * 0.8;
    const randomTop = Math.random() * window.innerWidth * 0.8;
    containerElement.style.position = "absolute";
    containerElement.style.left = randomLeft + "px";
    containerElement.style.top = randomTop + "px";
    //create image element
    const imageElement = document.createElement("img");
    imageElement.classList.add("image", "head-image");
    imageElement.setAttribute("src", imageUrl);
    //add container element to DOM
    //add image element in containers
    //add head images to containers
    if (tags.includes("head")) {
      headContainerElement.appendChild(containerElement);
      containerElement.appendChild(imageElement);
    }
    //add body images to containers
    else if (tags.includes("body")) {
      bodyContainerElement.appendChild(containerElement);
      containerElement.appendChild(imageElement);
    }
    //add hands images to containers
    else if (tags.includes("hands")) {
      handsContainerElement.appendChild(containerElement);
      containerElement.appendChild(imageElement);
    }
    //add feet images to containers
    else if (tags.includes("feet")) {
      feetContainerElement.appendChild(containerElement);
      containerElement.appendChild(imageElement);
    }
  }
});

const randomLeftD = Math.random() * window.innerWidth * 0.8;
const randomTopD = Math.random() * window.innerWidth * 0.4;
const randomLeftC = Math.random() * window.innerWidth * 0.8;
const randomTopC = Math.random() * window.innerWidth * 0.4;
const randomLeftT = Math.random() * window.innerWidth * 0.8;
const randomTopT = Math.random() * window.innerWidth * 0.4;

designerName.style.position = "fixed";
designerName.style.left = randomLeftD + "px";
designerName.style.top = randomTopD + "px";

collectorName.style.position = "fixed";
collectorName.style.left = randomLeftC + "px";
collectorName.style.top = randomTopC + "px";

titleName.style.position = "fixed";
titleName.style.left = randomLeftT + "px";
titleName.style.top = randomTopT + "px";