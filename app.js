// If tingimuslause
// Tingimuslause tingimuslause sees

let pin = 1234;
let kontoJaak = 100;
let valja = 50;

if (pin == 1234) {
    console.log ("parool õige");
    console.log ("Teie konto jääk on " + kontoJaak + "€");
    console.log ("Soovite välja võtta " + valja + "€")

    if (valja <= kontoJaak) {
        console.log ("Palun võtke oma raha");
        kontoJaak = (kontoJaak - valja);
        console.log ("Teie konto jääk on " + kontoJaak + "€")
    }

    else {
        console.log ("Kontol pole piisavalt raha")
    }
}

else {
    console.log ("parool vale");
}

// Mitmeosalised tingimused
// AND

let pin1 = 1;
let pin2 = 2;

if (pin1 == 1 && pin2 == 2) {
    console.log ("Seif avaneb");
}

else {
    console.log ("Politsei viib päti vangi");
}

// OR

if (pin1 == 1 || pin2 == 2) {
    console.log ("Seif avaneb");
}

else {
    console.log ("Politsei viib päti vangi");
}

// NOT

let value = 1;

if (value !== 1) {
    console.log (true);
}

else {
    console.log (false);
}

// Mitmeharulised if laused elif-iga

let punktid = 95;

if (punktid > 90) {
    console.log ("hinne A");
}
    else if (punktid > 80) {
        console.log ("hinne B");
    }
    else if (punktid > 70) {
        console.log ("hinne C");
    }
    else if (punktid > 60) {
        console.log("hinne D");
    }
    else if (punktid > 50) {
        console.log ("hinne E");
    }
    else {
        console.log ("Töö tuleb uuesti teha")
    }

// Tsüklid/Loops
// For tsükkel 

let arv;
let lause;

for (arv = 1; arv <= 10; arv++) {
    lause = 'Arv = ';
    if (arv < 10) {
        lause = lause + ' ';
    }
    lause = lause + arv;
    if (arv % 2 == 0) {
        lause = lause + ' - paaris';
    }
    else {
    lause = lause + ' - paaritu'
    }
    console.log (lause)
    if (arv >= 5) {
        break;
    }
}

let autod =['Kia', 'Toyota', 'Ford', 'Nissan']

for(let i = 0; i < autod.length; i++) {
    console.log(autod[i])
}