var homegoals = 0;
var visitorgoals = 0;
var i = 0;
var str = "";

function resetAll(){
 homegoals = 0;
 visitorgoals = 0;
 i = 0;
 str = "";
 
 UpdateGoalsToScreen();
 break_time = 1;

 str = prefixZero(0);
 document.getElementById("gametime").innerHTML = str;
 document.getElementById("H1").innerHTML = str;
 stopWorker();
 document.getElementById("period").innerHTML = 1;                 

 resetPenaltyTimer();
 resetTimeout();

}



function UpdateGoalsToScreen(){
document.getElementById('homegoalsonscreen').innerHTML = addGoal(homegoals);    
document.getElementById('visitorgoalsonscreen').innerHTML = addGoal(visitorgoals);
}


function addGoal(i)
{
    var predigit = "0";
    var result = predigit.fontcolor("black");    
    
    if(i < 10){
        str = result+i.toString();
    }
    else 
        str = i.toString();         
    return str;
}

function remGoal(i)
{
    var predigit = "0";
    var result = predigit.fontcolor("black");      
    
    if(i < 10)
        str = result+i.toString();                           
    else 
        str = i.toString();          
    
    return str;
}

function AddHomeGoal(){
homegoals = homegoals + 1;
document.getElementById('homegoals').innerHTML = addGoal(homegoals);
removePenalties(0);
}
function AddVisitorGoal(){
visitorgoals = visitorgoals + 1;
document.getElementById('visitorgoals').innerHTML = addGoal(visitorgoals);
removePenalties(1);
}

function RemHomeGoal(){
if (homegoals > 0)
    homegoals = homegoals - 1;
else homegoals = 0;
document.getElementById('homegoals').innerHTML = remGoal(homegoals);
}

function RemVisitorGoal(){
if (visitorgoals > 0)
    visitorgoals = visitorgoals - 1;
else visitorgoals = 0;
document.getElementById('visitorgoals').innerHTML = remGoal(visitorgoals);
}
