
window.onkeydown = function(e) {
    if(e.keyCode == 32 && e.target == document.getElementById('main')) {
        e.preventDefault();
        return false;
    }
};

window.onkeypress = function(event) {
    console.log(String.fromCharCode(event.keyCode))
    document.getElementById('about').style.display = "none";
    scrollMain()
}

