//1.
"use strict";
//2.
window.addEventListener("load", load);

function load() {
    //3.
    var imglist = document.querySelectorAll('img[name = "piccon"]');
    for(i = 0; i < imglist.length; i++){
        imglist[i].setAttribute("style", "outline: 3px solid black;");
    }
    var othrstyl = document.createElement("style");
    othrstyl.innerHTML = "figure#bar1i{align-items: center; width:330px; height:100px; margin-left:auto; margin-right:auto;} figure#bar1i img{width:100px; height:100px; margin-left:auto; margin-right: 4px; outline: 2px solid blue;} figure#bar1i img:hover{outline: 2px solid red; opacity: 1.0;} footer a:hover{color:blue;} div#dates{text-align:center; font-size:150%; color:white;}"
    document.head.appendChild(othrstyl);
    var artbar = document.createElement("figure");
    artbar.setAttribute("id", "bar1i");
    //3.
    document.getElementById("bar1").appendChild(artbar);
    for(var i = 1; i <= 3; i++) {
        var artbaritem = document.createElement("img");
        artbaritem.setAttribute("src", "img/concept_" + i + ".png");
        //4.a & 12
        artbaritem.addEventListener("mousedown", function(e) {
            document.getElementById("pic1").setAttribute("src", e.target.src);
        })
        artbar.appendChild(artbaritem);
    }
    //11
    var sheet = othrstyl.sheet;
    sheet.insertRule('footer a{color:white}',0);
    //10.d
    var dlbl = document.createElement("label")
    dlbl.innerHTML= "Time and Date back on in 5 seconds";
    document.getElementById("dates").appendChild(dlbl);
    var daton = document.createElement("input");
    daton.setAttribute("type", "checkbox");
    (function() { daton.checked = false;});
    daton.addEventListener("change", function(){
        if(daton.checked == true){
            //5.a&b
            var disdat = document.createElement("p");
            disdat.setAttribute("id", "date");
            document.getElementById("dates").appendChild(disdat);
            dlbl.innerHTML= "Time and Date On";
        }
        if(daton.checked == false){
            var disdat = document.getElementById("date");
            //5.c
            document.getElementById("dates").removeChild(disdat);
            dlbl.innerHTML= "Time and Date back on in soon";
        }
    });
    document.getElementById("dates").appendChild(daton);
    
    setInterval(DateTime, 1000);
    //4.c & 12
    setInterval(setInterval(function() { if(daton.checked == false){daton.checked = true;var disdat = document.createElement("p");
    disdat.setAttribute("id", "date");document.getElementById("dates").appendChild(disdat);
    dlbl.innerHTML= "Time and Date On";}}, 10000), 1000);
}


function DateTime(){
    //7
    var fulldate = new Date();
    var date = fulldate.toLocaleDateString();
    var time = fulldate.toLocaleTimeString();
    document.getElementById("date").innerHTML = "It is currently:"+ "<br>" + time + "   &nbsp; &nbsp; " + date;
}