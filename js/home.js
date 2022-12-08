// globale variabeln
  //Zeit umrechnungs constanten
    const tageStunden = 24;
    const stundenMinuten = 60;
    const minutenSecunden = stundenMinuten;
    const miliSecunden = 1000;

    const maxSecunden = minutenSecunden - 1;
    const maxMinuten = stundenMinuten - 1;
    const maxStunden = tageStunden - 1;

  // Eingabe Variabeln
    let angabeDay = 0;
    let angabeHouers = 0;
    let angabeMinuten = 0;
    let angabeSeconds = 0;

/* Contdown */


/* Eingabe Feld  */
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
  if(angabeHouers > maxStunden){
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
  }
  document.getElementById("eingabeHours").innerHTML = [angabeHouers];
  return angabeHouers;
}

function addMinutes(){
  angabeMinuten ++;
  if(angabeMinuten > maxMinuten){
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
    angabeMinuten = 0;
  }
  document.getElementById("eingabeMinutes").innerHTML = [angabeMinuten];
  return angabeMinuten;
}

function addSeconds(){
  angabeSeconds ++;
  if(angabeSeconds > maxSecunden){
    addMinutes();
    angabeSeconds = 0;
  }
  document.getElementById("eingabeSeconds").innerHTML = [angabeSeconds];
  return angabeSeconds;
}
function subSeconds(){
  angabeSeconds --;
  if(angabeSeconds < 0){
    alert('Minus Sekunden Akzeptier ich nicht');
    angabeSeconds = 0;
  }
  document.getElementById("eingabeSeconds").innerHTML = [angabeSeconds];
  return angabeSeconds;
}

// Stopp Countdown
function stopCountdown() {
  // JavaScript Funktion clearInterval() aufrufen.
  clearInterval(x);
  toggleStop();
}


// Toggle
function toggleStart() {
  document.getElementById("startButton").style.display = "none"
  document.getElementById("stopButton").style.display = "inline-block"
  document.getElementById("eingabeDay").style.display = "none"
  document.getElementById("dayAdd").style.display = "none"
  document.getElementById("daySub").style.display = "none"
  document.getElementById("eingabeHours").style.display = "none"
  document.getElementById("houersAdd").style.display = "none"
  document.getElementById("houersSub").style.display = "none"
  document.getElementById("eingabeMinutes").style.display = "none"
  document.getElementById("minutesAdd").style.display = "none"
  document.getElementById("minutesSub").style.display = "none"
  document.getElementById("eingabeSeconds").style.display = "none"
  document.getElementById("secondsAdd").style.display = "none"
  document.getElementById("secondsSub").style.display = "none"
}

function toggleStop() {
  document.getElementById("startButton").style.display = "inline-block"
  document.getElementById("stopButton").style.display = "none"
  document.getElementById("startButton").style.display = "inline-block"
  document.getElementById("eingabeDay").style.display = "inline-block"
  document.getElementById("dayAdd").style.display = "inline-block"
  document.getElementById("daySub").style.display = "inline-block"
  document.getElementById("eingabeHours").style.display = "inline-block"
  document.getElementById("houersAdd").style.display = "inline-block"
  document.getElementById("houersSub").style.display = "inline-block"
  document.getElementById("eingabeMinutes").style.display = "inline-block"
  document.getElementById("minutesAdd").style.display = "inline-block"
  document.getElementById("minutesSub").style.display = "inline-block"
  document.getElementById("eingabeSeconds").style.display = "inline-block"
  document.getElementById("secondsAdd").style.display = "inline-block"
  document.getElementById("secondsSub").style.display = "inline-block"
}

function uebergabe(){
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let ram1;
  let ram2;
  let ram3;

  ram1 = angabeDay * 24 * 60 * 60;
  ram2 = angabeHouers * 60 * 60;
  ram3 = angabeMinuten * 60;
  const jetzt = new Date().getTime(),
  countDown = ((ram1 + ram2 + ram3 + angabeSeconds) * 1000) + jetzt;

  toggleStart();

    x = setInterval(function () {
      const now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("day").innerText = Math.floor(distance / day)),
      (document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      ));

  
    if (distance < 0) {
      // Bildänderung
      var elment = document.body;
      elment.classList.toggle("bodyNew");
      stopCountdown();
    }
    //seconds
  }, 0);
}
