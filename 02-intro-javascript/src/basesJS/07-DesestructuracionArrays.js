console.log('hola');

const numeros=[1,2,3,4,5];
console.log(numeros);
console.log(numeros[2]);

const RetornaArreglo = function()
{
    return ['ABC', 123];
}

const RetornaArreglo2 =function(valor)
{
    return [valor, function( valor){
        console.log("Hola mundo, bienvenido " + valor)
     }]
}




const arr = RetornaArreglo2("victor");

const [p1,p2]=RetornaArreglo();
console.log(p1,p2);

console.log(arr);
const [p3,p4]=RetornaArreglo2("victor");
p4("victor");
