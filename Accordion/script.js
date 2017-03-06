var arr=[];

for(i=0;i<document.getElementsByClassName("top").length;i++){
  document.getElementsByClassName("top")[i].setAttribute("value",i);
}

// console.log(document.getElementsByClassName("top")[0].getAttribute("value"));

function accordion(a){
k=a.getAttribute("value");

for(i=0;i<document.getElementsByClassName("top").length;i++){
 document.getElementsByClassName("content")[i].style.display="none"
 document.getElementsByClassName("top")[i].style.background="#f5f5f5";
}


if(document.getElementsByClassName("content")[k].style.display="none"){
document.getElementsByClassName("content")[k].style.display="block";
document.getElementsByClassName("top")[k].style.background="#007FFF";

}




}

