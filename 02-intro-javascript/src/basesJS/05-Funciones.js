//funciones
function saludar(nombre){
    let saludo=' es un programador fullstack'
    return nombre + saludo;
}
const edad=function(edad){
    return edad * 2
};
//Buena practica
const saludar1= function(nombre){
    let saludo=' no es un programador fullstack'
    return nombre + saludo;
}
//funcion de flecha
const saludar2= (nombre)=> {
    let saludo=' no es un programador fullstack, es DB manager'
    return nombre + saludo;
}
//retorna un objeto
const getuserID=()=>(
    {
        userid:'ABC123',
        username: 'DUENDESRELAES123'
    }
)

//PRUEBA
const empleado={
    nombre: 'Jesus',
    edad: 22,
    puesto: 'programador',
    direccion: {
        ciudad:'culiacan',
        CP:80018,
        colonia: 'barrancos',
    }


}
const getuser=function(nombre1)
{
return{
    nombre: nombre1,
    edad: 22,
    puesto: 'programador',
}
}

const getuser2=(nombre1) =>(
{
    nombre: nombre1,
    edad: 22,
    puesto: 'programador',
})
const getuserInfo=()=>(
    {
        nombre: 'Jesus',
        edad: 22,
        puesto: 'programador',
        direccion: {
            ciudad:'culiacan',
            CP:80018,
            colonia: 'barrancos',
        }
    }
)


const arreglo=function()
{
    const arreglo1=[1,2,3,4,5]
    return arreglo1;
}

//PRUEBA
let nombre='victor barrantes'
console.log('hola');
console.log(saludar1(nombre));
console.log(edad(20));
console.log(saludar2(nombre));
console.log(getuserID());
console.log(getuserInfo());
console.log(getuser('juanito'));
console.log(getuser2('felix'));
console.log(arreglo());