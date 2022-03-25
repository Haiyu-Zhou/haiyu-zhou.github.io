//https://www.cityflowers.co.in/blogs/news/22-types-spring-flowers-pictures
//change the name of the flower per 3 seconds
const list = ['Spring Crocuses', 'Witch Hazel', 'Winter Aconite', 'Hellebore', 'Camellia', 'Snowdrop', 'Chionodoxa', 'Pansy', 'Scilla Siberica', 'Daffodil', 'Iris Reticulata', 'Forsythia', 'Anemone', 'Hyacinths', 'Tulips', 'Azaleas', 'Magnolia', 'Primrose', 'Lily Of The Valley', 'Lilac', 'Peonies', 'Allium'];
let currentIndex = 0;
const aDiv = document.getElementById('flower-list');

setInterval(() => {
   
   aDiv.innerHTML= list[currentIndex];   
   
   currentIndex++;
   
   if (currentIndex === 22)
    currentIndex = 0;

}, 3000)

//random background color
const colorList = aDiv.style.backgroundColor;
let randomColor = Math.floor(Math.random()*16777215).toString(16);
aDiv.style.backgroundColor = "#" + randomColor;

 //why this change random color per 3 sec don't work?
setInterval(() => {
   
    aDiv.style.backgroundColor = "#" + randomColor;
   
 }, 3000)

