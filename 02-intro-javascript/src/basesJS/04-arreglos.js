//arreglos
const arreglo=[1,2,3,4,5]
const arreglo2=[...arreglo,5];
const arreglo3=arreglo2.map( function(numero){
return numero * 2;
}); 

const arreglo4=['victor','jesus','kalemi','toño'];

const arreglo5=arreglo4.map(function(numero)
{
    return numero +' es programador ';
}
)
console.log('hola mundo');
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);
console.log(arreglo5);