document.addEventListener('DOMContentLoaded', function () {
    
    var burger = document.getElementsByClassName('burger')[0];

    burger.addEventListener('click', function () {
    for (let i=0; i<4; i++){
      var li = document.getElementsByClassName('header__li')[i].classList.toggle('header__li--close');  
    }  

});
});