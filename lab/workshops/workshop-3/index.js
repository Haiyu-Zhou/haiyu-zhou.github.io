//const setIntervalNow = function (){
//const datee = new Date();
//document.getElementById("demo").
//innerHTML = datee.toLocaleTimeString();
//setInterval(setIntervalNow , delay, 1000);
//}







const newInterval = setInterval(function () {
const date = new Date();
document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}, 1000);

console.log(newInterval)