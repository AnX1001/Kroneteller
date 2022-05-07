// stopp og tilbakestill alle funksjoner

document.querySelector('.tilbakestill').onclick = () => {
    location.reload();
}


// kjør setInterval tellkroner og visSedler
document.querySelector('.start').onclick = () => {
    setTimeout(function() {

        setInterval(tellKroner, 1000);
        setInterval(visSedler, 10000 );
    }, startForsinkelse); // lag en variable som heter startForsinkelse for å synce med antall kroner første time, 30 min etc. 
 
}

// alle variabler under gjøres tilgjengelig for global scope
let timelonn; // se over
let halvtime; // se over
let kvarter; // se over
let sekund; // se over 
let antallms; // se over
let startForsinkelse; // se over


// nettbruker skriver inn timelønnen for videre beregninger
document.querySelector('.oppdaterTimelonn').onclick = () => {
    
    timelonn = document.querySelector('.dintimelonn').value;
    console.log('nå er timelønnen: ' + timelonn);

    // variablene må oppdateres med input value, derfor er de her
    halvtime = timelonn / 2; 
    time = timelonn; 
    kvarter = timelonn / 4;
    sekund = timelonn / 3600;
    uendretTimelonn = timelonn;

};

const tidsintervaller = [];
// tidsintervall knapp trykk pusher inn i array 
// og tellKroner vil velge første object i array

// tidsintervall 30 minutter
document.querySelector('.halvtime').onclick = () => {
    console.log('r4');
    tidsintervaller.unshift(halvtime); // unshift verdien til halvtime til første plass i array
    antallms = 1800000; // la antallms for setIntervall være 30 min i ms....
    startForsinkelse = 1800000;  // startforsinkelse slik at du ikke starter allerede med timelønnen, men på null. 

    console.log('s' + tidsintervaller[0]);

}

// tidsintervall 60 minutter
document.querySelector('.time').onclick = () => {
    console.log('r4');
    tidsintervaller.unshift(time); // unshift verdien til halvtime til første plass i array
    antallms = 3600000; // la antallms for setIntervall være 60 min i ms....
    startForsinkelse = 1000;
    console.log('tidsintervall er på 60 minutter: ' + tidsintervaller[0]);

}

// tidsintervall 15 minutter
document.querySelector('.kvarter').onclick = () => {
    console.log('r4');
    tidsintervaller.unshift(kvarter); // unshift verdien til halvtime til første plass i array
    antallms = 900000; // la antallms for setIntervall være 15 min i ms....
    startForsinkelse = 900000;
    console.log('s' + tidsintervaller[0]);

}

//tidsintervall hvert sekund 
document.querySelector('.sekund').onclick = () => {
    console.log('x2');
    tidsintervaller.unshift(sekund) //unshifter verdien til sekund til første plass i array;
    antallms = 1000; // la antallms for setIntervall være på 1 sekund i ms...
    startForsinkelse = 1000;
    console.log('y2 + tidsintervall[0]');
}

    // tell kroner med timelønnen
    // tellKroner() legger til timelønnen + timelønn delt på antall intervaller (dvs, 60 min, 15 min ). 
    // dette gjentas med 15, 60, hvert sekund etc. 

    function tellKroner() {
        console.log('ny time lonn er :' + timelonn);
        console.log('er' + tidsintervaller);
        let desimaltimelonn;

        if (timelonn < 1980 ) {
            timelonn = parseFloat(timelonn)+ parseFloat(tidsintervaller[0]); //velg første object i array, dvs. valgt tidsintervall
            desimaltimelonn = timelonn.toFixed(2);
            sanntidslonn = desimaltimelonn - uendretTimelonn;
            document.querySelector('.tjent').innerHTML =  sanntidslonn.toFixed(2) + ' kr'; 
        } else {
            desimaltimelonn = timelonn.toFixed(2);
            document.querySelector('.tjent').innerHTML =  'I dag har du tjent: ' + desimaltimelonn + 'kr';
        }

    };

    // vis bilde av sedler 
    function visSedler() {
        const bilde = document.createElement('div');
        document.querySelector('.rutenett').appendChild(bilde);
        bilde.setAttribute("class", "bilde");
    };

    // Endre bakgrunnsbilde med intervaller
    const bgbilder = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg7.jpg'];
    document.body.style.backgroundImage = 'url(' + bgbilder[Math.floor(Math.random() * bgbilder.length)] + ')'