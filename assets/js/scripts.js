
function pintar(elem, color = 'green'){
    elem.style.backgroundColor = color;
    }

    const ele = document.getElementById("ele1");
    ele.addEventListener("click", function() {
        pintar(this, 'yellow');
    });

    
    