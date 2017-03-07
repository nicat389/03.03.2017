k=1;
function big(a){
if(a.className=="circle left" || a.className=="rectangle left"){
  if(a.style.width=="300px"){
        a.style.width="100px";
         a.style.height="100px";
   }

    else{
        a.style.width="300px";
    a.style.height="300px";
   }
}
  
 else{
     if(a.style.borderLeft=="50px solid transparent") {
   a.style.borderLeft="150px solid transparent";
     a.style.borderRight="150px solid transparent";
     a.style.borderBottom="300px solid red";
     }
  
  else{
      a.style.borderLeft="50px solid transparent";
     a.style.borderRight="50px solid transparent";
     a.style.borderBottom="100px solid red";
  }

}
     
 
}

function change(z){


    for(i=1;i<3;i++){
      
            document.getElementsByTagName("div")[i].style.border=document.getElementsByTagName("input")[0].value+"px solid black";
                }   
                 document.getElementsByTagName("div")[0].style.borderLeft=2*document.getElementsByTagName("input")[0].value+"px solid transparent";
                  document.getElementsByTagName("div")[0].style.borderRight=2*document.getElementsByTagName("input")[0].value+"px solid transparent";
                   document.getElementsByTagName("div")[0].style.borderBottom=4*document.getElementsByTagName("input")[0].value+"px solid red";
          
 



    
}
