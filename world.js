"use strict";

window.addEventListener("load", load);

function load() {
    var imglist = document.querySelectorAll('img[name = "piccon"]');
    for(var i = 0; i < imglist.length; i++){
        imglist[i].setAttribute("style", "outline: 3px solid white;");
    }
    var othrstyl = document.createElement("style");
    othrstyl.innerHTML = "footer a{color:white;} footer a:hover{color:blue;} div#setup{text-align:center;}";
    document.head.appendChild(othrstyl);
    document.addEventListener("keyup", function(e){
        if(document.getElementById("pic1").src === "img/3dmodelconcept2.png" && e.code === ArrowRight) {
            document.getElementById("pic1").src = "img/2dmodelconcept2.png";
           }
        if(document.getElementById("pic1").src === "img/2dmodelconcept2.png" && e.code === ArrowRight){
            document.getElementById("pic1").setAttribute("src", "img/3dmodelconcept2.png");
           }
    });
    document.addEventListener("keyup", function(e){
        if(document.getElementById("pic2").src === "img/3dmodelconcept3.png" && e.code === ArrowRight){
            document.getElementById("pic2").setAttribute("src", "img/2dmodelconcept3.png" );
           }
        if(document.getElementById("pic2").src === "img/2dmodelconcept3.png" && e.code === ArrowRight){
            document.getElementById("pic2").setAttribute("src", "img/3dmodelconcept3.png");
           }
    });
    document.addEventListener("keyup", function(e){
        if(document.getElementById("pic3").src === "img/3dmodelconcept6.png" && e.code === ArrowRight){
            document.getElementById("pic3").setAttribute("src", "img/2dmodelconcept6.png");
           }
        if(document.getElementById("pic3").src === "img/2dmodelconcept6.png" && e.code === ArrowRight){
            document.getElementById("pic3").setAttribute("src", "img/3dmodelconcept6.png");
           }
    });

}