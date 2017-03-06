

function count(){

    var novruz=new Date("March 19, 2016 24:00:00");
var n_day=novruz.getDate();
var n_hour=novruz.getHours();
var n_minute=novruz.getMinutes();
var n_second=novruz.getSeconds();



if(n_hour==0){
    n_hour=24;
}

if(n_minute==0){
    n_minute=60;
}

if(n_second==0){
    n_second=60;
}



var today=new Date();
var t_day=today.getDate();
var t_hour=today.getHours();
var t_minute=today.getMinutes();
var t_second=today.getSeconds();

if(t_hour==0){
    n_hour=24;
}

if(t_minute==0){
    n_minute=60;
}

if(t_second==0){
    n_second=60;
}


var c_day=n_day-t_day;
var c_hour=n_hour-t_hour;
var c_minute=n_minute-t_minute;
var c_second=n_second-t_second;


if(c_second==60){
    c_second=0;
}

if(c_minute==60){
    c_minute=0;
}

if(c_hour==24){
    c_hour=0;
}



if(c_second!=0 && c_minute!=0){
    c_minute-=1;
}

if(c_minute!=0 && c_hour!=0){
    c_hour-=1;
}

if(c_hour!=0 && c_day!=0){
    c_day-=1;
}


if(c_minute<0){
    alert("Son");
}

else{
setTimeout(function() {
  
        //  document.getElementById("timer").innerHTML=c_day+" gün "+c_hour+" saat "+c_minute+" deqiqe "+c_second+" saniye ";

         document.getElementsByTagName("li")[0].innerHTML=c_day+" gün ";
         document.getElementsByTagName("li")[1].innerHTML=c_hour+" saat ";
         document.getElementsByTagName("li")[2].innerHTML=c_minute+" dəqiqə ";
         document.getElementsByTagName("li")[3].innerHTML=c_second+" saniyə ";
  
  count();
}, 1000);


}


}

count();
