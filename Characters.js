"use strict";

window.addEventListener("load", load);

function load() {
    var imglist = document.querySelectorAll('img[name = "piccon"]');
    for(var i = 0; i < imglist.length; i++){
        imglist[i].setAttribute("style", "outline: 3px solid green;");
    }
    var othrstyl = document.createElement("style");
    othrstyl.innerHTML = "footer a{color:white;} footer a:hover{color:blue;} div#setup{text-align:center;}";
    document.head.appendChild(othrstyl);
    document.getElementById("switch1").addEventListener("mousedown", function(){
        if(document.getElementById("pic1").src === "img/weaponconcept1.png"){
            document.getElementById("pic1").src = "img/characterconcept1.png";
           }
        if(document.getElementById("pic1").src === "img/characterconcept1.png"){
            document.getElementById("pic1").setAttribute("src", "img/weaponconcept1.png");
           }
    });
    document.getElementById("switch2").addEventListener("mousedown", function(){
        if(document.getElementById("pic2").src === "img/weaponconcept2.png"){
            document.getElementById("pic2").setAttribute("src", "img/characterconcept2.png");
           }
        if(document.getElementById("pic2").src === "img/characterconcept2.png"){
            document.getElementById("pic2").setAttribute("src", "img/weaponconcept2.png");
           }
    });
    document.getElementById("switch3").addEventListener("mousedown", function(){
        if(document.getElementById("pic3").src === "img/weaponconcept3.png"){
            document.getElementById("pic3").setAttribute("src", "img/characterconcept3.png");
           }
        if(document.getElementById("pic3").src === "img/characterconcept3.png"){
            document.getElementById("pic3").setAttribute("src", "img/weaponconcept3.png");
           }
    });
}