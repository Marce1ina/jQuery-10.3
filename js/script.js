$(document).ready(function () {

    carouselList = $("#carousel ul");

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({ marginLeft: 0 });
    }

    function changeSlide() {
        carouselList.animate({ 'marginLeft': -940 }, 800, moveFirstSlide);
    }

    setInterval(changeSlide, 4000);

    $("[class$='right']").on("click", function (event) {
        changeSlide()
    });

    $("[class$='left']").on("click", function (event) {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({ marginLeft: -940 });
        carouselList.animate({ 'marginLeft': 0 }, 800, );
    });



});