var w;
var pause_time = 0;
var new_pause_time = 0;
var str;


var myVar;
var timeout_timer = 0;
var changed = 0;
var hometimeoutcount = 0;
var visitortimeoutcount = 0;


var break_time = 1;
var menu_state = 0;
var game_period = 30;
var break_period = 15;
var set_timeout = 20;
var short_penalty = 2;
var long_penalty = 5;
var period_count = 1;
var given_number = "";
function setGamePeriod(){
//    game_period = 12; // this must be given and read from numbers-pad
    game_period = given_number;
    var game_time = new Date();
    var col=document.getElementById("E1");
    col.style.color="black";
    game_time.setMinutes(game_period);
    document.getElementById("E1").innerHTML = game_time.getMinutes() + ":00";
    changed = 0;
    given_number = "";
}


function addDigit(digit){
    if (given_number.maxlength === undefined || given_number.maxlength < 3){
        given_number = given_number + digit;
    }
    else
        alert("no can do"+given_number.maxlength);
}



function setBreakPeriod(){
//    break_period = 2; // this must be given and read from numbers-pad
    break_period = given_number;
    var break_time = new Date();    
    var col=document.getElementById("F1");
    col.style.color="black";
    break_time.setMinutes(break_period);
    document.getElementById("F1").innerHTML = break_time.getMinutes() + ":00";
    changed = 0;
    given_number = "";    
}

function setTimeoutPeriod(){
//    set_timeout = 30; // this must be given and read from numbers-pad
    set_timeout = given_number;    
    timeout_timer = set_timeout;
    var timeout_time = new Date(); 
    var col=document.getElementById("B2");
    col.style.color="black";
    timeout_time.setSeconds(set_timeout);
    document.getElementById("B2").innerHTML = timeout_time.getSeconds() + "sec";
    changed = 0;
    given_number = ""; 
}

function setLongPenalty(){
//    long_penalty = 4;
    long_penalty = given_number;
    var long_penalty_time = new Date();
    var col=document.getElementById("D1");
    col.style.color="black";
    long_penalty_time.setMinutes(long_penalty);
    document.getElementById("D1").innerHTML = long_penalty_time.getMinutes() + ":00"; 
    changed = 0;
    given_number = "";
}

function setPeriodCount(){
//    period_count = 4;
    period_count = given_number; 
    var col=document.getElementById("E2");
    col.style.color="black";
    document.getElementById('E2').innerHTML = period_count;    
    changed = 0;
    given_number = "";
}





function setHomeTimeout(){
    var col=document.getElementById("F2");   
    col.style.color="black";
    changed = 0;
    if (hometimeoutcount >= 3)
        alert("no more timeouts for Home");
    else{
        startTimeout();
        hometimeoutcount = hometimeoutcount + 1;
        if (hometimeoutcount === 1)
            document.getElementById('hometimeout').innerHTML = "H"; 
        else if (hometimeoutcount === 2)
            document.getElementById('hometimeout').innerHTML = "H H";
        else
            document.getElementById('hometimeout').innerHTML = "H H H";
    }
    document.getElementById('F2').innerHTML = "H/" + hometimeoutcount;

}

function setVisitorTimeout(){
    var col=document.getElementById("G2");
    col.style.color="black";
    changed = 0;
    if (visitortimeoutcount >= 3)
        alert("no more timeouts for Visitor");
    else{
        startTimeout();
        visitortimeoutcount = visitortimeoutcount + 1;
        if (visitortimeoutcount === 1)
            document.getElementById('visitortimeout').innerHTML = "G"; 
        else if (visitortimeoutcount === 2)
            document.getElementById('visitortimeout').innerHTML = "G G";
        else
            document.getElementById('visitortimeout').innerHTML = "G G G";
    }
    document.getElementById('G2').innerHTML = "G/" + visitortimeoutcount; 
}


function startTimeout(){
    myVar = setInterval(function(){ setTimeout(); }, 1000);    
}

function setTimeout() {
    if (timeout_timer === 0){
        clearInterval(myVar);
        document.getElementById('breakperiod').innerHTML = '';
        playSound();
        timeout_timer = set_timeout;
    }
    else if (timeout_timer < 0)
        clearInterval(myVar);
    else{
        timeout_timer = timeout_timer - 1;
        document.getElementById('breakperiod').innerHTML = timeout_timer;
        }
}
 
function stopTimeout() {
  clearInterval(myVar);
}


function showActive(x){
    switch (x){
        case "E1":
            if (menu_state === 1){
                var col=document.getElementById("E1");
                changed = 1;    
            }
            else{
                var col=document.getElementById("E2");
                changed = 5;            
            }             
            break;
        case "F1":
            if (menu_state === 1){
                var col=document.getElementById("F1");
                changed = 2;    
            }
            else{
                var col=document.getElementById("F2");
                changed = 6;            
            }             
            break;
        case "B1":                

            if (set_timeout == 30){
                var col=document.getElementById("D1");
                changed = 11;
            }
            else{
                var col=document.getElementById("B2");
                changed = 3;            
            }             
            break;
        case "D1": 
            if (long_penalty === 5){
                var col=document.getElementById("D1");
                changed = 4;
            }
            else{
                var col=document.getElementById("D2");
                changed = 9;            
            }             
            break;

        case "G1": 
            var col=document.getElementById("G2");
            changed = 7;
            break;
        case "C1": 
            var col=document.getElementById("C2");
            changed = 8;
            break;
        
        case "A1": 
            var col=document.getElementById("C1");
            changed = 10;

        default:
            break;
    }
    col.style.color="red";
}




function clearChanges(){
    var col=document.getElementById("A1");
    col.style.color="black";
    col=document.getElementById("B1");
    col.style.color="black";    
    col=document.getElementById("C1");
    col.style.color="black";
    col=document.getElementById("D1");
    col.style.color="black";    
    col=document.getElementById("E1");
    col.style.color="black";
    col=document.getElementById("F1");
    col.style.color="black";
    col=document.getElementById("G1");
    col.style.color="black";
    col=document.getElementById("H1");
    col.style.color="black";
    col=document.getElementById("A2");
    col.style.color="black";
    col=document.getElementById("B2");    
    col.style.color="black";
    col=document.getElementById("C2");
    col.style.color="black";
    col=document.getElementById("D2");
    col.style.color="black";
    col=document.getElementById("E2");
    col.style.color="black";
    col=document.getElementById("F2");
    col.style.color="black";
    col=document.getElementById("G2");
    col.style.color="black";
    col=document.getElementById("H2");
    col.style.color="black";
    clearNumber();
    changed = 0;
}

function checkChanges(){
    switch (changed){
        case 1:
            setGamePeriod();
            break;
        case 2:
            setBreakPeriod();
            break;
        case 3:
            setTimeoutPeriod();
            break;
        case 4:
            setLongPenalty();
            break;
        case 5:
            setPeriodCount();
            break;            
        case 6:
            setHomeTimeout();
            break;   
        case 7:
            setVisitorTimeout();
            break;
        case 8:
            setHomePenalty();
            break;
        case 9:
            setVisitorPenalty();
            break;   
        case 10:
            setPenaltyForPlayer(short_penalty);
            break;
        case 11:
            setPenaltyForPlayer(long_penalty);            
            break;       
        default:
            break;            
    }
    
}


function openMenu(){
//alert("gp"+(game_period*60)+ "s_pen"+(short_penalty*60));
    if (menu_state === 0){
        document.getElementById('A1').innerHTML = "JÄÄKIEKKO";
        document.getElementById('C1').innerHTML = "JOUK.";
        document.getElementById('D1').innerHTML = "NIMI";
        document.getElementById('E1').innerHTML = game_period + ":00";
        document.getElementById('F1').innerHTML = break_period + ":00";
        document.getElementById('G1').innerHTML = "AIKA";                        
        document.getElementById('H1').innerHTML = "ÄÄNI";                        

        document.getElementById('A2').innerHTML = "TALL";
        document.getElementById('B2').innerHTML = "ULOS";
        document.getElementById('C2').innerHTML = "H";
        document.getElementById('D2').innerHTML = "G";
        document.getElementById('E2').innerHTML = "AIKA";
        document.getElementById('F2').innerHTML = "TAUKO";
        document.getElementById('G2').innerHTML = "YLÖS";                        
        document.getElementById('H2').innerHTML = "AUTO";         
        menu_state = 1;
    }
    else {
        document.getElementById('A1').innerHTML = "RANGAIST.";
        document.getElementById('C1').innerHTML = short_penalty +":00";
        document.getElementById('D1').innerHTML = long_penalty + ":00";
        document.getElementById('E1').innerHTML = "ERÄ";
        document.getElementById('F1').innerHTML = "AIKALISÄ";
        document.getElementById('G1').innerHTML = "";                        
        document.getElementById('H1').innerHTML = "0:00";                        
        
        document.getElementById('A2').innerHTML = "";
        document.getElementById('B2').innerHTML = set_timeout + "sec";
        document.getElementById('C2').innerHTML = "H:XX";
        document.getElementById('D2').innerHTML = "G:XX";
        document.getElementById('E2').innerHTML = period_count;
        document.getElementById('F2').innerHTML = "H/" + hometimeoutcount;
        document.getElementById('G2').innerHTML = "G/" + visitortimeoutcount;                        
        document.getElementById('H2').innerHTML = "+";         
        menu_state = 0;
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
    new_pause_time = 0;  // oisko tää ok??
    pause_time = 0;  // oisko tää ok??    
    menu_state = 1;
    openMenu();
}


function pauseWorker() {
    if (pause_time < new_pause_time)
        pause_time = new_pause_time;
    w.terminate();
    w = undefined;
    menu_state = 1;
    openMenu();
    checkAndStopPenalties();
}

function startWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) === "undefined"  && (break_time === 1 || break_time <= period_count)) {
            w = new Worker("demo_workers.js");
        }
        //päivitä erä
        if (break_time > period_count)            
            break_time = period_count;
        else{
            document.getElementById("period").innerHTML = break_time;    
            w.onmessage = function(event) {             
            new_pause_time = pause_time + event.data;
            if (new_pause_time >= game_period*60){  //game_period sekenteina //erän pituus 10s!!!!!!!!!!!!!!!!!!
                playSound();
                str = prefixZero(event.data + pause_time);
                document.getElementById("gametime").innerHTML = str;
                stopWorker();  //erän loppu
                checkAndStopPenalties();
                break_time += 1;
                play_sound();
            }
            else{ 
                str = prefixZero(event.data + pause_time);
                document.getElementById("gametime").innerHTML = str;
                checkAndStartPenalties();
            }
            };
        }   
    }
    else {
        document.getElementById("gametime").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}
