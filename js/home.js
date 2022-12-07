// globale variabeln

var angabeDay = 0;

function addDay(angabeDay){
  angabeDay ++;
  console.log(angabeDay);
  document.getElementById("eingabeDay").innerHTML = [angabeDay];
  return angabeDay;
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