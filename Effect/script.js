for(i=0;i<document.getElementsByClassName("range").length;i++){
    document.getElementsByClassName("range")[i].setAttribute("id",i);
    document.getElementsByTagName("button")[i].setAttribute("value",i);
}


function none(){
    document.getElementsByTagName("img")[0].style.filter="none";
}



function change(a){
k=a.id;

if(k==0){
   
    document.getElementsByTagName("img")[0].style.filter="blur("+a.value+"px)";
    
    console.log(a.value);
    
}


   if(k==1){
         document.getElementsByTagName("img")[0].style.filter="brightness("+a.value+"%)";
   
   
    console.log(a.value);
    
} 



if(k==2){
    document.getElementsByTagName("img")[0].style.filter="contrast("+a.value+"%)";}




if(k==3){
   document.getElementsByTagName("img")[0].style.filter="grayscale("+a.value+"%)";
}


if(k==4){
    document.getElementsByTagName("img")[0].style.filter="hue-rotate("+a.value+"deg)";
}

if(k==5){
    document.getElementsByTagName("img")[0].style.filter="invert("+a.value+"%)";
}

if(k==6){
     document.getElementsByTagName("img")[0].style.filter="opacity("+a.value+"%)";
}

if(k==7){
     document.getElementsByTagName("img")[0].style.filter="saturate("+a.value+")";
}

if(k==8){
     document.getElementsByTagName("img")[0].style.filter="sepia("+a.value+"%)";
}


}

