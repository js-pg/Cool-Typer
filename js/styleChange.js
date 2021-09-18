const navDesktop = document.getElementById('navDesktop');
const mainLi = document.getElementById('mainLi');
const li1 = document.getElementById('li1');
const li2 = document.getElementById('li2');
const li3 = document.getElementById('li3');
const mainDiv = document.getElementById('main');
const mainInput = document.getElementById('mainInput');
const gridEl1 = document.getElementById('gridEl1')
const gridEl2 = document.getElementById('gridEl2')
const gridEl3 = document.getElementById('gridEl3')


function paletteChange(main, main2, highlight, li,) {
    navDesktop.style.backgroundColor = main2;
    mainLi.style.color = highlight;
    li1.style.color = li;
    li2.style.color = li;
    li3.style.color = li;
    mainDiv.style.backgroundColor = main;
    mainInput.style.backgroundColor = main2;
    gridEl1.style.outlineColor = highlight;
    gridEl1.style.outlineColor = highlight;
    gridEl1.style.outlineColor = highlight;

};
