$(document).ready(function () {

    let carouselList = $("#carousel ul");
    let navDots = $("#nav-dots");

    function moveLastDot(howMany) {
        for (var i = 0; i < howMany; i++) {
            let firstDot = navDots.find("div:first");
            let lastDot = navDots.find("div:last");
            firstDot.before(lastDot);
        }
    };

    function moveFirstDot(howMany) {
        for (var i = 0; i < howMany; i++) {
            let firstDot = navDots.find("div:first");
            let lastDot = navDots.find("div:last");
            lastDot.after(firstDot);
        }
    };

    function moveFirstSlides(howMany) {
        for (var i = 0; i < howMany; i++) {
            let firstItem = carouselList.find("li:first");
            let lastItem = carouselList.find("li:last");
            lastItem.after(firstItem);
        }
        moveLastDot(howMany);
        carouselList.css({ marginLeft: 0 });
    };
    
    function moveLastSlides(howMany) {
        for (var i = 0; i < howMany; i++) {
            let firstItem = carouselList.find("li:first");
            let lastItem = carouselList.find("li:last");
            firstItem.before(lastItem);
        }
        moveFirstDot(howMany);
        carouselList.css({ marginLeft: -940 });
    };

    function changeSlidesNext(howMany) {
        carouselList.animate({ 'marginLeft': -940 * howMany }, 800, function () {
            moveFirstSlides(howMany);
        });
    };

    function changeSlidesPrev(howMany) {
        moveLastSlides(howMany);
        carouselList.animate({ 'marginLeft': 0 }, 800, );
    };

    setInterval(function () {changeSlidesNext(1);}, 6000);

    $("[class$='right']").on("click", function (event) {
        changeSlidesNext(1);
    });

    $("[class$='left']").on("click", function (event) {
        changeSlidesPrev(1);
    });

    $(".dot").on("click", function (event) {
        var dotIndex = $(".dot").index(this);
        var activeDotIndex = $(".dot").index($(".dot-active"));
        if (dotIndex < activeDotIndex) {
            changeSlidesPrev(activeDotIndex - dotIndex);
        }
        else if (dotIndex > activeDotIndex) {
            changeSlidesNext(dotIndex - activeDotIndex);
        };
    });

});