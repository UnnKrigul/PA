// Muutujad

// var, let, const
var nimi = 'Unn'; // defineerimine
console.log(nimi); 
nimi = 'Kata' // väärtuse omistamine
console.log(nimi)

// muutuja initsialiseerimine
var tervitus;
console.log(tervitus);
tervitus = 'tere'
console.log(tervitus);

// liitnimede kasutamine
var eesNimi = 'Unn'; //Camel Style
var ees_nimi = 'Unn'; //PHP Style
var EesNimi = 'Unn'; //Pascal Style

// let
let pereNimi = 'Krigul';
console.log(pereNimi);
pereNimi='?'
console.log(pereNimi)

// const

const minuEesNimi = 'Unn'
console.log(minuEesNimi)
// minuEesNimi = 'Katrin'
// console.log(minuEesNimi)

// const kasutamise näide
const inimene = {nimi : 'Katrin', vanus : 20};
console.table(inimene);

inimene.vanus = 21;
console.table(inimene);

// const kasutamise näide 2
const arvud = [1, 2, 3, 4, 5];
console.log(arvud);
arvud.push(6);
console.log(arvud);