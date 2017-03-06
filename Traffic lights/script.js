i=0;
function light(){
    
 setTimeout(function() {
  
    if(i<=5) {
        document.getElementsByClassName("red")[0].style.background="red";
        document.getElementsByClassName("yellow")[0].style.background="darkgoldenrod";
        document.getElementsByClassName("green")[0].style.background="darkgreen";
        document.getElementsByClassName("second")[0].innerHTML=5-i;
    }

       if(i>5 && i<=7) {
       document.getElementsByClassName("red")[0].style.background="darkred";
        document.getElementsByClassName("yellow")[0].style.background="yellow";
        document.getElementsByClassName("green")[0].style.background="darkgreen";
      document.getElementsByClassName("second")[0].innerHTML=7-i;
    }

     if(i>7 && i<=12) {
        document.getElementsByClassName("red")[0].style.background="darkred";
        document.getElementsByClassName("yellow")[0].style.background="darkgoldenrod";
        document.getElementsByClassName("green")[0].style.background="green";
      document.getElementsByClassName("second")[0].innerHTML=12-i;
    }
 
    if(i==13){
        i=1;
    }
       i=i+1;

console.log(i);

     light();
 }, 1000);


      

   
}

light();