var width = window.innerWidth
var height = window.innerHeight

if (width / height < 1.06){
    document.getElementById('desktop').style.display = 'none'
    document.getElementById('mobile').style.display = 'block'
} else {
    document.getElementById('mobile').style.display = 'none'
}