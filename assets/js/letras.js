let colorActual = ""; 

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        document.getElementById("key").style.backgroundColor = "pink";
    } else if (event.key === 's') {
        document.getElementById("key").style.backgroundColor = "orange";
    }else if (event.key === 'd') {
        document.getElementById("key").style.backgroundColor = "aquamarine";
    }
    });
    

   

 document.addEventListener('keydown', function (event) {
    if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
        
        let nuevoDiv = document.createElement("div");
       nuevoDiv.style.width = "200px";
       nuevoDiv.style.height = "200px";
        nuevoDiv.style.border = "solid 1px black";
        nuevoDiv.style.margin = "10px";
   
        if (event.key === 'q') {
           nuevoDiv.style.backgroundColor = "purple";
           colorActual = "purple";
        } else if (event.key === 'w') {
            nuevoDiv.style.backgroundColor = "gray";
            colorActual = "gray";
        } else if (event.key === 'e') {
            nuevoDiv.style.backgroundColor = "brown";
           colorActual = "brown";
       }
   
       
        document.getElementById("container").appendChild(nuevoDiv);
    }
 });


 function getCurrentColor() {
     return colorActual;
 }

 
