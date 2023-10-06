setInterval(currentTime,1000);
function currentTime(){
    var date = new Date();
   var hour = date.getHours();
    var min = date.getMinutes();
   var sec =date.getSeconds();
   var p = "AM";
    if(hour==0){
        hour=12;
    }
    if(hour>12){
        hour=hour-12;
        p="PM";
    }
    hour= (hour<10)? "0"+ hour : hour;
   min= (hour<10)? "0"+ min : min;
   sec= (hour<10)? "0"+ sec : sec;
   var time = hour + ":" +min +":"+ sec +""+ p;
   document.getElementById("clocl").innerHTML=time;
   setInterval(currentTime,1000);
}currentTime();