// Funktsioonid

// arvu paarsuse kontroll
/*  function funktsiooniNimi(param1, param2, param3){
    	funktsiooni sisu
}
 */
// funktsiooni defineerimine
function paarsusK(arv){
    // defineerime suvalise täisarvu
    let lause;
    // arvutame jäägi 2-ga jagamisel
    let jaak = arv % 2;
    

    //kui jääk on võrnde 0ga
    if( jaak === 0){
        lause = arv + ' on paaris';
    }  else {
        lause = arv + ' ei ole paaris';
    }
    return lause;
}

// funktsiooni kasutamine
let paarsus = paarsusK(3);
console.log(paarsus);



function ristkylikuPindala(pikkus, laius){
    let pindala = pikkus * laius;
    return pindala;
}


function v2ljastus(pikkus, laius){
    
    console.log('Pikkus = ' + pikkus);
    console.log('Laius = ' + laius);
    let rPindala = ('Pindala = ' + ristkylikuPindala(2, 4));
    console.log(rPindala);
}

v2ljastus(2, 4)


