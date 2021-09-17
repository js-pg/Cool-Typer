/*              |
                |       make main div height of viewport
               \/
*/
const mainDiv = document.getElementById("main");
mainDiv.style.height = (window.innerHeight - 86)+"px";

var i = 0;
var txt = 'Cool Typer - About:';
var speed = 130;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById('abouth1').innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}

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
    typeWriter();
 
};
