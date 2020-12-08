"use strict";

window.addEventListener("load", load);

function load() {
    var imglist = document.querySelectorAll('img[name = "piccon"]');
    for(i = 0; i < imglist.length; i++){
        imglist[i].setAttribute("style", "outline: 3px solid black;");
    }
    var othrstyl = document.createElement("style");
     othrstyl.innerHTML = "figure#bar1i{align-items: center; width:330px; height:100px; margin-left:auto; margin-right:auto;} figure#bar1i img{width:100px; height:100px; margin-left:auto; margin-right: 4px; outline: 2px solid blue;} figure#bar1i img:hover{outline: 2px solid red; opacity: 1.0;} footer a{color:white;} footer a:hover{color:blue;} input{align-items:center;} p#date{text-align:center; font-size:150%; color:white;}"
     document.head.appendChild(othrstyl);
    var artbar = document.createElement("figure");
    artbar.setAttribute("id", "bar1i");
    document.getElementById("bar1").appendChild(artbar);
    for(var i = 1; i <= 3; i++) {
        var artbaritem = document.createElement("img");
        artbaritem.setAttribute("src", "img/concept_" + i + ".png");
        artbaritem.addEventListener("mousedown", function(e) {
            document.getElementById("pic1").setAttribute("src", e.target.src);
        })
        artbar.appendChild(artbaritem);
     }
    var disdat = document.createElement("p");
    disdat.setAttribute("id", "date");
    document.getElementById("dates").appendChild(disdat);
    setInterval(DateTime, 1000);
    
}

function DateTime(){
    var fulldate = new Date();
    var date = fulldate.toLocaleDateString();
    var time = fulldate.toLocaleTimeString();
    document.getElementById("date").innerHTML = "It is currently:"+ "<br>" + time + "   &nbsp; &nbsp; " + date;

}