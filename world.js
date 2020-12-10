"use strict";

window.addEventListener("load", load);

function load() {
    var imglist = document.querySelectorAll('img[name = "piccon"]');
    for(var i = 0; i < imglist.length; i++){
        var fill = i+1;
        imglist[i].setAttribute("style", "outline: 3px solid white;");
        
    }
    //3
    document.querySelector("p").innerHTML += "<br>Note:Pressing shift will flip between concept art and 3D models!!!";

    //4.b
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 16) {
            var s1 = document.getElementById("pic1").alt;
            var ls1 = document.getElementById("pic1").src;
            document.getElementById("pic1").setAttribute("src", s1);
            document.getElementById("pic1").setAttribute("alt", ls1);
            var s2 = document.getElementById("pic2").alt;
            var ls2 = document.getElementById("pic2").src;
            document.getElementById("pic2").setAttribute("src", s2);
            document.getElementById("pic2").setAttribute("alt", ls2);
            var s3 = document.getElementById("pic3").alt;
            var ls3 = document.getElementById("pic3").src;
            document.getElementById("pic3").setAttribute("src", s3);
            document.getElementById("pic3").setAttribute("alt", ls3);
        }});
    
    var othrstyl = document.createElement("style");
    othrstyl.innerHTML = "footer a{color:white;} footer a:hover{color:blue;} div#setup{text-align:center;}";
    document.head.appendChild(othrstyl);
    


}

