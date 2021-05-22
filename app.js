var min=prompt("Enter Minutes",60);
var sec=00;
var msec=00;
var interval;
var minHead=document.getElementById("min");
minHead.innerHTML=min;
var secHead=document.getElementById("sec");
secHead.innerHTML=sec;
var msecHead=document.getElementById("msec");
msecHead.innerHTML=msec;
var btndis=document.getElementById("disable");
function timer(){
    msec++;
    msecHead.innerHTML=msec;
    if(msec == 100){
        sec--;
        secHead.innerHTML=sec;
        msec=00;
    }
    if(sec == 00){
        min--;
        minHead.innerHTML=min;
        sec=60;
        if( min < 0){
            reset();
            document.write("Time is Over")
        }
    }
}
function start(){
    interval=setInterval(timer,10)
    btndis.disabled = true;
}
function pause(){
    clearInterval(interval);
    btndis.disabled = false;
}
function reset(){
    msec=00;
    sec=00;
    min=00;
    msecHead.innerHTML=msec;
    secHead.innerHTML=sec;
    minHead.innerHTML=min;
    pause();
    btndis.disabled = false;
}