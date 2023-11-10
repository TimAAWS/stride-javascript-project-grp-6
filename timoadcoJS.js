let mugs = document.getElementById("beerMugClack");


mugs.addEventListener("click", function () {

    window.open("https://en.wikipedia.org/wiki/Oktoberfest");

})

mugs.addEventListener("mouseover", function () {

    mugs.src = "timoadcoImages/clinking-beer-mugs.gif";

})

mugs.addEventListener("mouseout", function () {

    mugs.src = "timoadcoImages/clinking-beer-mugs-paused.gif";

})

// Slideshow

var index = 1;
var max = 4;
var min = 1;
var prefix = "timoadcoImages/SlideShow/";
var ext = ".jpg";
var dev = document.getElementById("content");

function newSlide() {

    dev.removeChild(dev.children[0]);

    let newImg = document.createElement("img");


    newImg.src = prefix + index + ext;
    newImg.className = "fadeinimg";
    newImg.id = "myimage";
    newImg.alt = "slideshow image";
    dev.appendChild(newImg);

    if (dev.children.length > 2) {
        dev.removeChild(dev.children[0])
    }

}

document.getElementById("next").addEventListener("click", function (evt) {

    evt.preventDefault();

    if (++index > max) {
        index = min;
    }

    newSlide();
});


document.getElementById("previous").addEventListener("click", function (evt) {

    evt.preventDefault();

    if (--index < min) {
        index = max;
    }

    newSlide();

});