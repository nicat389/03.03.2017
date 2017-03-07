var arr=[
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg"
]



document.getElementsByTagName("body")[0].style.background="url("+arr[0]+")";
document.getElementsByTagName("body")[0].style.backgroundRepeat="no-repeat";
document.getElementsByTagName("body")[0].style.backgroundSize="cover";
document.getElementsByTagName("body")[0].id=0;


for(i=0;i<arr.length;i++){
    document.getElementsByTagName("img")[i].id=i+10;;
     
}

function previous(){

}

function next(){
    k=parseInt(document.getElementsByTagName("body")[0].id+1);
console.log(k);
   document.getElementsByTagName("body")[0].style.background="url('img/"+kW+".jpg')";
   
}

function pic(a){
document.getElementsByTagName("body")[0].style.background="url("+arr[a.id-10]+")";
document.getElementsByTagName("body")[0].style.backgroundRepeat="no-repeat";
document.getElementsByTagName("body")[0].style.backgroundSize="cover";
document.getElementsByTagName("body")[0].id=a.id-10;

}