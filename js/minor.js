/*              |
                |       make main div height of viewport
               \/
*/
mainDiv = document.getElementById("main");
mainDiv.style.height = (window.innerHeight - 86)+"px";

var i = 0;
var i2 = 0;
var txt = 'Cool Typer - About:';
var aboutTxt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
var speed = 120;
var speed2 = 200;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById('abouth1').innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}




function scrollMain() {
    window.scroll({
        top: 200,
        behavior: 'smooth'
    });
    document.getElementById('about').style.display = "none";

};

function scrollAbout() {
    document.getElementById('about').style.display = "block";

    window.scroll({
        top: window.innerHeight + 80,
        behavior: 'smooth'
    });
    typeWriter();
 
};

window.scroll({
    top: 0,
    behavior: 'smooth' //scroll to top on refesh
});

document.getElementById('aboutH4').style.opacity = "0%";
document.getElementById('aboutH4').style.opacity = "100%";

navDesktop = document.getElementById('navDesktop');
mainLi = document.getElementById('mainLi');
li1 = document.getElementById('li1');
li2 = document.getElementById('li2');
li3 = document.getElementById('li3');
mainDiv = document.getElementById('main');
mainInput = document.getElementById('mainInput');
gridEl1 = document.getElementById('gridEl1');
gridEl2 = document.getElementById('gridEl2');
gridEl3 = document.getElementById('gridEl3');


console.log('test')


function paletteChange(main, main2, highlight, li, mainLi, input, placeHolder) {
    navDesktop = document.getElementById('navDesktop').style.backgroundColor = main2;
    mainLi = document.getElementById('mainLi').style.color = mainLi;
    li1 = document.getElementById('li1').style.color = li;
    li2 = document.getElementById('li2').style.color = li;
    li3 = document.getElementById('li3').style.color = li;
    mainDiv = document.getElementById('main').style.backgroundColor = main;
    mainInput = document.getElementById('mainInput').style.backgroundColor = main;
    gridEl1 = document.getElementById('gridEl1').style.outline = highlight + ' solid 1px';
    gridEl2 = document.getElementById('gridEl2').style.outline = highlight + ' solid 1px';
    gridEl3 = document.getElementById('gridEl3').style.outline = highlight + ' solid 1px';
    gridEl1 = document.getElementById('gridEl1').style.backgroundColor = main;
    gridEl2 = document.getElementById('gridEl2').style.backgroundColor = main;
    gridEl3 = document.getElementById('gridEl3').style.backgroundColor = main;
    gridEl1 = document.getElementById('gridEl1').style.color = li;
    gridEl2 = document.getElementById('gridEl2').style.color = li;
    gridEl3 = document.getElementById('gridEl3').style.color = li;   
    about = document.getElementById('about').style.backgroundColor =  main2;
    typewriterH1 = document.getElementById('abouth1').style.color = li;
    caret = document.getElementById('aboutCaret').style.backgroundColor = li;
    mainInput = document.getElementById('mainInput').style.color = input;
    mainPlaceholder = document.getElementById('mainPlaceholder').style.color = placeHolder;
};

paletteChange('white', 'white', 'rgb(48, 45, 53)', 'black', 'black', 'black', 'gray')

var mainInput = document.getElementById('mainInput');
mainInput.focus()
mainInput.select()