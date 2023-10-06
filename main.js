window.onload= function(){
    var min = 00 ;
    var sec =00;
    var count = 00;
    var appendmin = document.getElementById("min");
    var appendsec = document.getElementById("sec");
    var appendcount = document.getElementById("count");
    var buttonstart = document.getElementById('bt-start');
    var buttonreset = document.getElementById('bt-reset');
    var buttonstop = document.getElementById('bt-stop');
    var Iterval;

 
 
    buttonstart.onclick = function(){
    clearInterval(Iterval);
    Iterval = setInterval(startTimer,10);

  }
  buttonstop.onclick = function(){
    clearInterval(Iterval);
    

  } 
  buttonreset.onclick = function(){
    clearInterval(Iterval);
    min = "00" ;
     sec ="00";
   count = "00";
   appendmin.innerHTML =min;
   appendsec.innerHTML =sec;
    appendcount.innerHTML =count;
  }
  function startTimer(){
    count++;
    if(count<9){
        appendcount.innerHTML="0"+count;
    }
    if(count>9){
        appendcount.innerHTML=count;
    }
    if(count>60){
        console.log("sec");
        sec ++;
        appendsec.innerHTML = "0"+ sec ;
        count = 0;
        appendcount.innerHTML ="0"+ 0;
    }
   
    if(sec>9){
        appendsec.innerHTML=sec;
    }
    if(sec>60){
        console.log("min");
        min ++;
        appendmin.innerHTML = "0"+min ;
        sec = 0;
        appendsec.innerHTML ="0"+ 0;
    }
  }
}
