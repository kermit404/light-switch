function lightswitch() {
    var img = document.getElementById("switch");
    var src = img.getAttribute('src');
    if (src == 'on_switch.PNG') {
        document.getElementById("light").innerHTML = "";
        document.getElementById("light").innerHTML = "<img id='switch' width=300 height=300 src=off_switch.PNG>";
        var elements = document.getElementsByClassName('w');
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "#222226"; 
            elements[i].style.color = "#d6d6d6";     
        }
        var elements = document.getElementsByClassName('b');
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "#d6d6d6";    
            elements[i].style.color = "#222226";    
        }
    } else {
        document.getElementById("light").innerHTML = "";
        document.getElementById("light").innerHTML = "<img id='switch' width=300 height=300 src=on_switch.PNG>";
        var elements = document.getElementsByClassName('b');
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "#222226"; 
            elements[i].style.color = "#d6d6d6";     
        }
        var elements = document.getElementsByClassName('w');
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "#d6d6d6";    
            elements[i].style.color = "#222226";    
        }
    }
}
var clicks = 0;
var width = 98;
var height = 118;
function showhide() {
    clicks += 1;
    yippee = document.getElementById("tbh");
    if (getComputedStyle(yippee).opacity == 1 ) {
        yippee.style.opacity = 0;
    }
    else {
        yippee.style.opacity = 1;
    }
    if (clicks >= 10) {
        width -= 1;
        height -= 1.204;
        yippee.style.width = width + 'px';
        yippee.style.height = height + 'px';
    }
}