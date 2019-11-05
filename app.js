// Funktsioonid

// arvu paarsuse kontroll
/*  function funktsiooniNimi(param1, param2, param3){
    	funktsiooni sisu
}
 */
// funktsiooni defineerimine
function paarsusK(arv){
    // defineerime suvalise täisarvu

// arvutame jäägi 2-ga jagamisel
let jaak = arv % 2;

//kui jääk on võrnde 0ga

if( jaak === 0){
    console.log(arv + ' on paaris')
}
else {
    console.log(arv + ' ei ole paaris')
}
}

// funktsiooni kasutamine
paarsusK(2);

