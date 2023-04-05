let kot = document.getElementById('kot');
let pies = document.getElementById('dog');
function stop () {
    kot.style.animationPlayState = "running";
}
  
let i= 0;  
document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32    
        
    )
    if (i === 0){
    kot.style.top = "0px";
    i++;
    } else if(i === 1) {
        kot.style.top = "200px";
        i--;
    }
  }
 