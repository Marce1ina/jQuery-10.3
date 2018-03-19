$(document).ready(function () {

    let carouselList = $("#carousel ul");
    let navDots = $("#nav-dots");

    function moveFirstSlide() {
        let firstItem = carouselList.find("li:first");
        let lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({ marginLeft: 0 });
    };
    function moveLastSlide() {
        let firstItem = carouselList.find("li:first");
        let lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({ marginLeft: -940 });
    };

    function moveLastDot() {
        let firstDot = navDots.find("div:first");
        let lastDot = navDots.find("div:last");
        firstDot.before(lastDot);
    };
    function moveFirstDot() {
        let firstDot = navDots.find("div:first");
        let lastDot = navDots.find("div:last");
        lastDot.after(firstDot);
    };

    function changeSlideNext() {
        carouselList.animate({ 'marginLeft': -940 }, 800, moveFirstSlide);
        setTimeout(moveLastDot, 800);
    };
    function changeSlidePrev() {
        moveLastSlide();
        carouselList.animate({ 'marginLeft': 0 }, 800, );
        setTimeout(moveFirstDot, 800);
    };

    setInterval(changeSlideNext, 4000);

    $("[class$='right']").on("click", function (event) {
        changeSlideNext();
    });

    $("[class$='left']").on("click", function (event) {
        changeSlidePrev();
    });

});