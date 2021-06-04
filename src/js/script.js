$(document).ready(function() {
    console.log("Hello, World!");
    $('.upper-carousel').flickity({
        cellAlign: "left",
        contain: true,
        percentPosition: true,
        autoPlay: false,
        prevNextButtons: false,
        pageDots: false,
    });
    $('.lower-carousel').flickity({
        cellAlign: "center",
        contain: true,
        percentPosition: false,
        autoPlay: false,
        prevNextButtons: true,
        pageDots: true,
        draggable: false
    });
});