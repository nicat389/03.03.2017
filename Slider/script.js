var arr=[
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg"
]
m=document.getElementsByTagName("body")[0];
m.style.background="url("+arr[0]+")";
document.getElementsByTagName("body")[0].style.backgroundRepeat="no-repeat";
document.getElementsByTagName("body")[0].style.backgroundSize="cover";
m.id=0;

for(i=0;i<arr.length;i++){
    document.getElementsByTagName("img")[i].className=i;
}

function previous(){
    k=parseInt(m.id)-1;
    if(k<0) {
    k=arr.length-1;
    m.style.background="url("+arr[k]+")";
    }

   else
     m.style.background="url("+arr[k]+")";
     m.id=k;
     document.getElementsByTagName("body")[0].style.backgroundRepeat="no-repeat";
document.getElementsByTagName("body")[0].style.backgroundSize="cover";
}

function next(){
    k=parseInt(m.id)+1;
    if(k>=arr.length) {
    k=0;
    m.style.background="url("+arr[k]+")";

    }

   else
     m.style.background="url("+arr[k]+")";
     m.id=k;
     document.getElementsByTagName("body")[0].style.backgroundRepeat="no-repeat";
document.getElementsByTagName("body")[0].style.backgroundSize="cover";
}

function pic(a){
m.style.background="url("+arr[a.className]+")";
m.id=a.className
document.getElementsByTagName("body")[0].style.backgroundRepeat="no-repeat";
document.getElementsByTagName("body")[0].style.backgroundSize="cover";
}

