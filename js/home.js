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
function uebergabe(){
  ram1 = angabeDay * 24 * 60 * 60;
  rnanana = angabeHouers * 60 * 60;
  rnaihe = angabeMinuten * 60;
  countDown = ram1 + rnanana + rnaihe + angabeSeconds * 1000;

  // aingabe feld löschen
    document.getElementById(startButton).remove();
    document.getElementById(eingabe).remove();

    intervalId = setInterval(function () {
    const now = new Date().getTime(),
      distance = countDown + now;

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

      if (distance < 306000) {
        // Audio datatei
        
      }
    if (distance < 0) {
      // Bildänderung
      var elment = document.body;
      elment.classList.toggle("bodyNew");
      stopCountdown();
    }
    //seconds
  }, 0);
}

// Stopp Countdown
function stopCountdown() {
  // JavaScript Funktion clearInterval() aufrufen.
  clearInterval(intervalId);