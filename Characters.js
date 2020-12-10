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
    var inlist = document.querySelectorAll("div");
    for(i = 0; i < inlist.length; i++){
        var fill = i+1;
        //10.a
        var buttons = document.createElement("input");
        buttons.setAttribute("type", "button");
        buttons.setAttribute("name", "pic" + (fill));
        buttons.setAttribute("value", "concept art");
        buttons.setAttribute("class", "pic" + fill)
        buttons.setAttribute("alt", "img/characterconcept"+ fill + ".png");
        buttons.addEventListener("mousedown", function(e){
            var sorc;
            sorc = document.getElementById(e.target.name).getAttribute("src");
            document.getElementById(e.target.name).setAttribute("src", e.target.alt);
            e.target.alt = sorc; 
            
        });
        inlist[i].appendChild(buttons);
    }


    
}