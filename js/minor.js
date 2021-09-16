/*              |
                |       make main div height of viewport
               \/
*/
const mainDiv = document.getElementById("main");
mainDiv.style.height = (window.innerHeight - 86)+"px";

function swapStyleSheet(sheet) {
    document.getElementById('pageStyle').setAttribute('href', ('css/' + sheet +'.css')) // <<<<<  change link href
};

function scrollMain() {
    window.scroll({
        top: 94,
        behavior: 'smooth'
    });
    document.getElementById('about').style.display = "none";

};

function scrollAbout() {
    document.getElementById('about').style.display = "block";

    window.scroll({
        top: window.innerHeight + 100,
        behavior: 'smooth'
    });
};
