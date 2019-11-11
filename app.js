// Global

var a = 1;
let b = 2;
const c = 3;

console.log('Global ', a, b, c);

// block

if (true){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Block ', a, b, c);
}
console.log('Global ', a, b, c);

// function 

function testScope(){
    var a = 7;
    let b = 8;
    const c = 9;
    console.log('Function ', a, b, c);
}
testScope();
console.log('Globaalne ', a, b, c)