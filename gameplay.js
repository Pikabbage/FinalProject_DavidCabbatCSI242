"use strict";

window.addEventListener("load", load);

function load() {
    var imglist = document.querySelectorAll('img[name = "piccon"]');
    for(var i = 0; i < imglist.length; i++){
        imglist[i].setAttribute("style", "outline: 3px solid black;");
    }
    var othrstyl = document.createElement("style");
    othrstyl.innerHTML = "footer a{color:white;} footer a:hover{color:blue;} input{align-items:center;}"
    document.head.appendChild(othrstyl);

    
}