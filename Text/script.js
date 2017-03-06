k=0;z=0;
function bold(){
   k++;
   if(k%2!=1)
    document.getElementsByTagName("p")[0].style.fontWeight="normal";
   else{
        document.getElementsByTagName("p")[0].style.fontWeight="bold";
   }
}

function italic(){
     z++;
   if(z%2!=1)
    document.getElementsByTagName("p")[0].style.fontStyle="normal";
   else{
        document.getElementsByTagName("p")[0].style.fontStyle="italic";
   }
}


function change(){
    document.getElementsByTagName("p")[0].style.fontSize=document.getElementsByTagName("input")[0].value+"px";
}