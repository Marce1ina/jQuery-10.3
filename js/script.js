$(document).ready(function(){
});

setInterval(changeSlide, 4000);

function changeSlide() {
    carouselList = $("#carousel ul");
    carouselList.animate({'marginLeft':-940}, 800, moveFirstSlide);
}

function moveFirstSlide () {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
}