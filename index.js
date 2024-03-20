const moreInfo = document.getElementById('more-info');
const showUp = document.getElementById('show-up');



moreInfo.addEventListener("click", function(){
    if (showUp.style.visibility = 'hidden'){
        showUp.style.visibility = 'visible';
    }
    else{
        showUp.style.visibility = 'hidden';
    }
});