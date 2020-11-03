var i=0;
function expand(){
  if(i==0){
    document.getElementById("menu").style.transform="scale(3)"; 
    document.getElementById("menu1").style.transform="scale(0)"; 
    document.getElementById("menu2").style.transform="scale(0)"; 
    document.getElementById("plus").style.transform="rotate(270deg)"; 
    i=1;
  }
  else{   
    document.getElementById("menu").style.transform="scale(0)"; 
    document.getElementById("plus").style.transform="rotate(0deg)"; 
    i=0;
  }
}
let j=0;
function expand1(){
  if(j==0){
    document.getElementById("menu1").style.transform="scale(3)"; 
    document.getElementById("menu").style.transform="scale(0)"; 
    document.getElementById("menu2").style.transform="scale(0)"; 
    document.getElementById("plus1").style.transform="rotate(360deg)"; 
    j=1;
  }
  else{   
    document.getElementById("menu1").style.transform="scale(0)"; 
    document.getElementById("plus1").style.transform="rotate(0deg)"; 
    j=0;
  }
}

let k=0;
function expand2(){
  if(k==0){
    document.getElementById("menu2").style.transform="scale(3)"; 
    document.getElementById("menu1").style.transform="scale(0)"; 
    document.getElementById("menu").style.transform="scale(0)"; 
    document.getElementById("plus2").style.transform="rotate(360deg)"; 
    k=1;
  }
  else{   
    document.getElementById("menu2").style.transform="scale(0)"; 
    document.getElementById("plus2").style.transform="rotate(0deg)"; 
    k=0;
  }
}