const navDesktop = document.getElementById('navDesktop')
const mainLi = document.getElementById('mainLi')
li1 = document.getElementById('li1')
li2 = document.getElementById('li2')
li3 = document.getElementById('li3')




function paletteChange(targetStyle) {
    if (targetStyle == 'default') {
        navDesktop.style.backgroundColor = 'white';
        mainLi.style.color = 'black'
        li1.style.color = '#585858'
        li2.style.color = '#585858'
        li3.style.color = '#585858'
    };
};

paletteChange('default');