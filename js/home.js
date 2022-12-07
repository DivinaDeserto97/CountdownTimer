// globale variabeln

let angabeDay = 0;
let angabeHouers = 0;
let angabeMinuten = 0;


function addDay(){
  angabeDay ++;
  document.getElementById("eingabeDay").innerHTML = [angabeDay];
  return angabeDay;
}
function subDay(){
  angabeDay --;
  if(angabeDay < 0){
    alert('Minus Tage Akzeptier ich nicht');
    angabeDay = 0;
  }
  document.getElementById("eingabeDay").innerHTML = [angabeDay];
  return angabeDay;
}

function addHouers(){
  angabeHouers ++;
  if(angabeHouers > 23){
    addDay();
    angabeHouers = 0;
  }
  document.getElementById("eingabeHours").innerHTML = [angabeHouers];
  return angabeHouers;
}
function subHouers(){
  angabeHouers --;
  if(angabeHouers < 0){
    alert('Minus Stunden Akzeptier ich nicht');
    angabeHouers = 0;
  }angabeHouers
  document.getElementById("eingabeHours").innerHTML = [angabeHouers];
  return angabeHouers;
}

function addMinutes(){
  angabeMinuten ++;
  if(angabeMinuten > 59){
    addHouers();
    angabeMinuten = 0;
  }
  document.getElementById("eingabeMinutes").innerHTML = [angabeMinuten];
  return angabeMinuten;
}
function subMinutes(){
  angabeMinuten --;
  if(angabeMinuten < 0){
    alert('Minus Minuten Akzeptier ich nicht');
    angabeHouers = 0;
  }angabeHouers
  document.getElementById("eingabeMinutes").innerHTML = [angabeMinuten];
  return angabeMinuten;
}

function addMinutes(){
  angabeMinuten ++;
  if(angabeMinuten > 59){
    addHouers();
    angabeMinuten = 0;
  }
  document.getElementById("eingabeMinutes").innerHTML = [angabeMinuten];
  return angabeMinuten;
}
function subMinutes(){
  angabeMinuten --;
  if(angabeMinuten < 0){
    alert('Minus Minuten Akzeptier ich nicht');
    angabeHouers = 0;
  }angabeHouers
  document.getElementById("eingabeMinutes").innerHTML = [angabeMinuten];
  return angabeMinuten;
}
/* // Legen Sie das Datum fest, bis zu dem der Countdown läuft
let countDownDate = new Date("").getTime();

// Aktualisieren des Countdowns alle 1 Sekunde
let countown = setInterval(function() {

  // Abrufen des heutigen Datums und der Uhrzeit
  let now = new Date().getTime();
    
  // Ermitteln Sie den Abstand zwischen jetzt und dem Countdown-Datum
  let distance = countDownDate - now;
    
  // Zeitberechnungen für Tage, Stunden, Minuten und Sekunden
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Ausgabe des Ergebnisses in einem Element mit id="demo"
  document.getElementById("day").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds; 
  // Wenn der Countdown abgelaufen ist, schreiben Sie einen Text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("final").innerHTML = "EXPIRED";
  }
}, 1000);
 */