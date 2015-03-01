var homegoals = 0;
var visitorgoals = 0;
var i = 0;
var str = "";

function UpdateGoalsToScreen(){
document.getElementById('homegoalsonscreen').innerHTML = addGoal(homegoals,2);    
document.getElementById('visitorgoalsonscreen').innerHTML = addGoal(visitorgoals,3);
}


function addGoal(i,j)
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

function remGoal(i,j)
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
document.getElementById('homegoals').innerHTML = addGoal(homegoals,0);
}
function AddVisitorGoal(){
visitorgoals = visitorgoals + 1;
document.getElementById('visitorgoals').innerHTML = addGoal(visitorgoals,1);
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
