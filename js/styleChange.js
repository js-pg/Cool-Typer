const navDesktop = document.getElementById('navDesktop');
const mainLi = document.getElementById('mainLi');
li1 = document.getElementById('li1');
li2 = document.getElementById('li2');
li3 = document.getElementById('li3');
mainDiv = document.getElementById('main');
mainInput = document.getElementById('mainInput');




function paletteChange(main, main2, highlight, li,) {
    navDesktop.style.backgroundColor = main2;
    mainLi.style.color = highlight;
    li1.style.color = li;
    li2.style.color = li;
    li3.style.color = li;
    mainDiv.style.backgroundColor = main;
    mainInput.style.backgroundColor = main2;

};
