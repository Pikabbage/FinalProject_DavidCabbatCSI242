"use strict";

window.addEventListener("load", load);

function load() {
    var imglist = document.querySelectorAll('img[name = "piccon"]');
    for(var i = 0; i < imglist.length; i++){
        imglist[i].setAttribute("style", "outline: 3px solid black;");
        
    }
    var othrstyl = document.createElement("style");
    othrstyl.innerHTML = "footer a{color:white;} footer a:hover{color:blue;} input{align-items:center;} div{text-align:center;} table#stats{margin:auto; text-align:center; border: 3px solid black; background-color:white;} table#stats td{border: 2px solid black; background-color:white; width: 22px;}";
    document.head.appendChild(othrstyl);
    //10.f
    var lv = document.createElement("select");
    lv.setAttribute("value", "Lv?");
    lv.setAttribute("style", "width : 100px");
    var hp = 0, atk =0, def =0, mag =0;
    for(var i = 0; i <= 99; i++){   
        var lvl = document.createElement("option");
        lvl.setAttribute("value", i);
        if(i == 0){
            lvl.innerHTML = "Level ?"
            lvl.setAttribute("selected", "selected");
        }
        else{
            lvl.innerHTML = "Level " + i;
            
        }
        lv.appendChild(lvl);
    }
    //8
    lv.addEventListener("change", function(e){
        hp = Math.round(e.target.value*10.3);
        atk = Math.round(e.target.value*2.6);
        def = Math.round(e.target.value*2.4);
        mag = Math.round(e.target.value*2.5);
        document.getElementById("stats").innerHTML = statbox(hp,atk,def,mag);
    })
    document.getElementById("barc").appendChild(lv);
    var stats = document.createElement("table");
    stats.setAttribute("id", "stats");
    document.getElementById("barc").appendChild(stats);
    document.getElementById("stats").innerHTML = statbox(hp,atk,def,mag);


    
}
//12
function statbox(h, a, d, m){
    var stats = "<tr><td>HP</td><td>STR</td><td>Def</td><td>Mag</td><tr><td>" + h + "</td><td>" + a + "</td><td>" + d + "</td><td>" + m + "</td>";
    return stats;
}