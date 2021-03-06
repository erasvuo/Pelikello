var home_player = [0,0,0,0,0,0];    //indexes 0...2 used
var visitor_player = [0,0,0,0,0,0];    //indexes 3...6 used
var penaltyVar = []; //indexes 0...2 for home, indexes 3...5 for visitor
var penalty_started = [0,0,0,0,0,0];
var penalty_paused = [0,0,0,0,0,0];
var penalty_timer = [0,0,0,0,0,0];

function startPenaltyTimer(i){
    penaltyVar[i] = setInterval(function(){ setPenaltyTimer(i); }, 1000);
    penalty_started[i] = 1;
}

function setPenaltyTimer(i) {
    var p_timer;

    if (i < 3){
        if (penalty_timer[i] === 0){
            clearInterval(penaltyVar[i]);
            document.getElementById('homepenalty'+i+'time').innerHTML = '';
            document.getElementById('homepenalty'+i+'nr').innerHTML = '';
            home_player[i] = 0;
            penalty_started[i] = 0;
        }
        else if (penalty_timer[i] < 0)
            clearInterval(penaltyVar[i]);
        else{
            penalty_timer[i] = penalty_timer[i] - 1;
            p_timer = prefixZero(penalty_timer[i]);
            document.getElementById('homepenalty'+i+'time').innerHTML = p_timer;
            penalty_started[i] = 1;        
        }
    }
    else if (2 < i < 6){
        if (penalty_timer[i] === 0){
            clearInterval(penaltyVar[i]);
            document.getElementById('visitorpenalty'+(i-3)+'time').innerHTML = '';
            document.getElementById('visitorpenalty'+(i-3)+'nr').innerHTML = '';
            visitor_player[i] = 0;
            penalty_started[i] = 0;
        }
        else if (penalty_timer[i] < 0)
            clearInterval(penaltyVar[i]);
        else{
            penalty_timer[i] = penalty_timer[i] - 1;
            p_timer = prefixZero(penalty_timer[i]);
            document.getElementById('visitorpenalty'+(i-3)+'time').innerHTML = p_timer;
            penalty_started[i] = 1;        
        }
    }


}

function stopPenaltyTimer(i) {
  clearInterval(penaltyVar[i]);
}


function resetPenaltyTimer() {

 for(var i = 0; i < 3; i++){
    document.getElementById('homepenalty'+i+'time').innerHTML = '';
    document.getElementById('homepenalty'+i+'nr').innerHTML = '';
    penalty_timer[i] = 0;
    penalty_started[i] = 0;
    clearInterval(penaltyVar[i]);
 }
 for(var i = 3; i < 6; i++){            
    document.getElementById('visitorpenalty'+(i-3)+'time').innerHTML = '';
    document.getElementById('visitorpenalty'+(i-3)+'nr').innerHTML = '';
    penalty_timer[i] = 0;
    penalty_started[i] = 0;
    clearInterval(penaltyVar[i]);
 }
}


function setHomePenalty(){
    for (i = 0; i < 3; i++) {
        if (home_player[i] === 0){
            home_player[i] =given_number;
            given_number = "";                        
            break;
        }
    }    
    var col=document.getElementById("C2");
    col.style.color="black";
    document.getElementById('C2').innerHTML = "H:"+home_player[i];    
    changed = 0;
}

function setVisitorPenalty(){
    for (i = 3; i < 6; i++) {
        if (visitor_player[i] === 0){
            visitor_player[i] =given_number;
            given_number = "";
            break;
        }
    }             
    var col=document.getElementById("D2");
    col.style.color="black";
    document.getElementById('D2').innerHTML = "G:"+ visitor_player[i];    
    changed = 0;

}


function setPenaltyForPlayer(penalty){
    var penalty;
    var col;
    if (penalty === short_penalty)
        col=document.getElementById("C1");
    else
        col=document.getElementById("D1");        

    col.style.color="black";
    var q;    
    var temppi = document.getElementById('C2').innerHTML;
    var output_text = temppi.substring(2);
    if (output_text !== "XX"){
        updatePenaltyToScreen(penalty,"koti",output_text);
        q = setNextHomePenaltyIndex((penalty*60),output_text);    
    }
    document.getElementById('C2').innerHTML = "H:XX";

    temppi = document.getElementById('D2').innerHTML;
    output_text = temppi.substring(2);
    if (output_text !== "XX"){
        updatePenaltyToScreen(penalty,"vieras",output_text);   
        q = setNextVisitorPenaltyIndex((penalty*60),output_text);          
    }        
    document.getElementById('D2').innerHTML = "G:XX";  
}



function checkAndStartPenalties(){
   
    for (i = 0; i < 3; i++){
        if (home_player[i] !== 0 && (penalty_started[i] === 0 || penalty_paused[i] === 1)){
            startPenaltyTimer(i);
            penalty_paused[i] = 0;
        }
    }

    for (i = 3; i < 6; i++){
        if (visitor_player[i] !== 0 && (penalty_started[i] === 0 || penalty_paused[i] === 1)){
            startPenaltyTimer(i);
            penalty_paused[i] = 0;
        }
    }                
}


function checkAndStopPenalties(){
    
    for (i = 0; i < 3; i++){
        if (home_player[i] !== 0 && (penalty_started[i] === 1)){
            stopPenaltyTimer(i);
            penalty_paused[i] = 1;
        }      
    }

    for (i = 3; i < 6; i++){
        if (visitor_player[i] !== 0 && (penalty_started[i] === 1)){
            stopPenaltyTimer(i);
            penalty_paused[i] = 1;
        }      
    }        
}

function setNextHomePenaltyIndex(x,output_text){    
    for (i = 0; i < 3;){
        if (home_player[i] == output_text){ // do not add "=" as then penalty_timer is not set
            penalty_timer[i] = x;
            return i;        
        }
        else
            i++;                
    }
    return i;
}


function setNextVisitorPenaltyIndex(x,output_text){
    for (i = 3; i < 6;){
        if (visitor_player[i] == output_text){ // do not add "=" as then penalty_timer is not set
            penalty_timer[i] = x;
            return i;        
        }
        else
            i++;     
    }
    return i;        
}

function updatePenaltyToScreen(z,x,y){        
    if (x === "koti"){
        if (document.getElementById('homepenalty0nr').innerHTML === '')        
            document.getElementById('homepenalty0nr').innerHTML = y; 
        else if (document.getElementById('homepenalty1nr').innerHTML === '')        
            document.getElementById('homepenalty1nr').innerHTML = y; 
        else if (document.getElementById('homepenalty2nr').innerHTML === '')        
            document.getElementById('homepenalty2nr').innerHTML = y;
        else
            alert("kotijoukkueen jäähytaulu täynnä");

    }
    else{
        if (document.getElementById('visitorpenalty0nr').innerHTML === '')        
            document.getElementById('visitorpenalty0nr').innerHTML = y; 
        else if (document.getElementById('visitorpenalty1nr').innerHTML === '')        
            document.getElementById('visitorpenalty1nr').innerHTML = y; 
        else if (document.getElementById('visitorpenalty2nr').innerHTML === '')        
            document.getElementById('visitorpenalty2nr').innerHTML = y;
        else
            alert("vierasjoukkueen jäähytaulu täynnä");
    }
}

function removePenalties(i){
    if(i===0){
        smallest = penalty_timer[3];
        var rem_ind = 3;
        for (j = 3; j < 5;){
            if (smallest<= penalty_timer[j+1] && smallest !==0){
                //continue
            }
            else if (penalty_timer[j+1] !==0){
                smallest = penalty_timer[j+1];
                rem_ind = j+1;
            }
            j++;
        }
        if(smallest !== 0){   
            document.getElementById('visitorpenalty'+(rem_ind-3)+'time').innerHTML = '';
            document.getElementById('visitorpenalty'+(rem_ind-3)+'nr').innerHTML = '';
            penalty_timer[rem_ind] = 0;
            penalty_started[rem_ind] = 0;
            clearInterval(penaltyVar[rem_ind]);
        }  
    }
    else{
        smallest = penalty_timer[0];
        var rem_ind = 0;
        for (j = 0; j < 2;){
            if (smallest<= penalty_timer[j+1] && smallest !==0){
                //continue
            }
            else if (penalty_timer[j+1] !==0){
                smallest = penalty_timer[j+1];
                rem_ind = j+1;
            }
            j++;
        }
        if(smallest !== 0){ 
            document.getElementById('homepenalty'+rem_ind+'time').innerHTML = '';
            document.getElementById('homepenalty'+rem_ind+'nr').innerHTML = '';
            penalty_timer[rem_ind] = 0;
            penalty_started[rem_ind] = 0;
            clearInterval(penaltyVar[rem_ind]);        
        }
    }
}