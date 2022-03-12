

const newInterval = setInterval(function () {
    const date = new Date();
document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}, 1000);

console.log(newInterval)