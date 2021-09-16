const navDesktop = document.getElementById('navDesktop')

function paletteChange(targetStyle) {
    if (targetStyle == 'default') {
        navDesktop.style.backgroundColor = 'white'
    }
}

paletteChange('default');