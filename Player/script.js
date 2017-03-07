var arr=[
     "musics/1.mp3",
    "musics/2.mp3",
     "musics/3.mp3",
      "musics/4.mp3",
       "musics/5.mp3"
];

for(i=0;i<arr.length;i++){
    document.getElementsByTagName("li")[i].id=i;
}

function play(k){
a=k.id;
document.getElementsByTagName("audio")[0].setAttribute("src",arr[a])
document.getElementsByTagName("audio")[0].style.transition=".9s";
}

