var a;
var b;
var noq = 0;
var nans =0;
var op;
var streak = 0;
var maxstr=0;
function check(){
// console.log("Datatype of a and b"+typeof(p)+typeof(q))
var ans= document.getElementById('ANS').value;
var x=a+op+b;
console.log("Answer =" + eval(x));
var ev=eval(x).toFixed(0);
if(ans == ev)
{
    // alert("RIGHT ANSWER!");
    console.log("Player is correct")
    document.getElementById('resss').innerHTML="You damn right !!";
    document.getElementById("result").src="correct.jpg";
    nans++;
    streak++;
}
else{
    // alert("YOU WERE WRONG ...BUT DONT GIVE UP YET ");
    document.getElementById("resss").innerHTML="Wrong but no worries , try next";
    console.log("Player is Wrong ");
    document.getElementById("result").src="oopsie.jpg";
    if(maxstr<streak){
        maxstr=streak;
    }
    streak=0;
}
document.getElementById('bruh').innerHTML="Previous answer was " + eval(x);

next();
}
function next(){
    noq++;
    if(noq!=1)
    {
        document.getElementById('bruh').innerHTML="Previous answer was " + eval(a+op+b).toFixed(2);
    }
    a=(Math.random()*100).toFixed(0);
    b=(Math.random()*100).toFixed(0);
    var randomop=((Math.random()*(4-1))+1).toFixed(0);
    switch(parseInt(randomop))
{
    case 1: op='+';
    console.log("VALUE OF OP IS 1")
    break;
    case 2: op='-';
    console.log("VALUE OF OP IS 2")
    break;
    case 3: op='/';
    console.log("VALUE OF OP IS 3")
    break;
    case 4: op='*';
    console.log("VALUE OF OP IS 4")
    break;

}
    document.getElementById('ques').innerHTML="What is "+a+op+b +"?";
    document.getElementById('Score').innerHTML="Score :" + nans +"/"+ (noq-1);
    document.getElementById('Streak').innerHTML=" Current Streak :" + streak;
    pomodoro(1);
}


function End(){
    document.write('<br><br><center><h1 style="font-size: 80px; font-family: Impact, Haettenschweiler, Arial Narrow Bold, sans-serif;">Thank you</h1></center><br>'+'<center>Final Score is : '+nans+' out of ' + (noq-1)+'<br><h3>Highest streak was :'+maxstr+'<br><br><img src ="b59a913c-f854-4deb-9e24-2d7c5d3c0299.jpg" height="200px" width="400px"></center>');
}


function sure(){
    var x= confirm("Are you sure ?")
    if(x==true)
    {
        End();
    }
}
//timer 
var seconds = 0;
var wdth=100;
var interval ;
function pomodoro(mins) {
   seconds = mins*60 || 0;     
   interval = setInterval(function() {
    wdth-=1.6667;
    document.getElementsByClassName("progress-bar bg-success")[0].setAttribute("style", "width:"+wdth+"%");
        seconds--;

   },1000)
}
// document.getElementById('end').addEventListener("mouseover", sure);

