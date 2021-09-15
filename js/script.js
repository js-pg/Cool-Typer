/*              |
                |       make main div height of viewport
               \/
*/
const mainDiv = document.getElementById("main");
mainDiv.style.height = (window.innerHeight)+"px";


function changeTheme(targetTheme){
    document.querySelector("link[href='u1.css']").href = "targetTheme" + ".css";
}// reference: https://stackoverflow.com/questions/19844545/replacing-css-file-on-the-fly-and-apply-the-new-style-to-the-page
;
function scrollMain() {
    window.scroll({
        top: 94,
        behavior: 'smooth'
    });
};

function scrollAbout() {
    window.scroll({
        top: window.innerHeight + 94,
        behavior: 'smooth'
    });
};