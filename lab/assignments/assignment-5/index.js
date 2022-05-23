//https://www.cityflowers.co.in/blogs/news/22-types-spring-flowers-pictures
//change the name of the flower per 3 seconds
const listSpring = ['Spring Flowers', 'Spring Crocuses', 'Witch Hazel', 'Winter Aconite', 'Hellebore', 'Camellia', 'Snowdrop', 'Chionodoxa', 'Pansy', 'Scilla Siberica', 'Daffodil', 'Iris Reticulata', 'Forsythia', 'Anemone', 'Hyacinths', 'Tulips', 'Azaleas', 'Magnolia', 'Primrose', 'Lily Of The Valley', 'Lilac', 'Peonies', 'Allium'];

const listSummer = ['Summer Flowers', 'Anemone', 'Calla Lily', 'Casablanca Lily', 'Cornflower', 'Daisy/Gerber Daisy', 'Delphinium', 'Rhododendron', 'Rose/Garden Rose', 'Stephanotis'];

const listAutumn = ['Autumn Flowers', 'Aster', 'Calla Lily', 'Chocolate Cosmos', 'Chrysanthemum', 'Dahlia', 'Parrot Tulips', 'Rose', 'Statice', 'Sunflower', ' Victorian Lily'];

const listWinter = ['Winter Flowers', 'Amaryllis', 'Camelia', 'Freesia', 'Heather', 'Holly/Evergreen/Ivy', 'Lisianthus', 'Narcissus', 'Rose', 'Ranunculus', 'Violets'];

let currentIndex = 0;
const aDiv = document.getElementById('flower-list');



//random background color
const colorList = aDiv.style.backgroundColor;
let randomColor = Math.floor(Math.random()*16777215).toString(16);
aDiv.style.backgroundColor = "#" + randomColor;

 //why this change random color per 3 sec don't work?
setInterval(() => {
   
    aDiv.style.backgroundColor = "#" + randomColor;
   
 }, 3000)


 const newDate = new Date();
 const currentDate = {
  year: newDate.getFullYear(),
  month: newDate.getMonth() + 1,
  date: newDate.getDate(),
};
const yearContainer = document.querySelector("#year");
const monthContainer = document.querySelector("#month");
const dateContainer = document.querySelector("#date");

yearContainer.innerHTML =  currentDate.year + "/";
monthContainer.innerHTML =  currentDate.month +"/";
dateContainer.innerHTML =  currentDate.date;


setInterval(() => {
   if (currentDate.month >= 2 && currentDate.month < 5){
     aDiv.innerHTML= listSpring[currentIndex];  
   };
   if(currentDate.month >= 5 && currentDate.month < 8){
    aDiv.innerHTML= listSummer[currentIndex]; 
   };
   if(currentDate.month >= 8 && currentDate.month < 11){
    aDiv.innerHTML= listAutumn[currentIndex]; 
  };
  if(currentDate.month >= 11 && currentDate.month == 12 && currentDate.month == 1){
    aDiv.innerHTML= listWinter[currentIndex]; 
  };
  
   
  
  currentIndex++;
  
  if (currentIndex === 22)
   currentIndex = 0;

}, 3000)