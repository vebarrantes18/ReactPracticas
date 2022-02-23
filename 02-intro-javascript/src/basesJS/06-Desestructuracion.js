console.log('hola');

const persona = {
    nombre:'churrere',
    edad:45,
    apellido: 'garcia',
    Estatus: 'soltero'
}

const empleado={
    puesto:'programador'
}

const returnuser=function({nombre,apellido})
{

    console.log(nombre,apellido)
    
    
}

const returnuser1=function({nombre,apellido,Estatus,edad})
{
    if(edad <=18 )
        {
            return{
                TipoEstatus:Estatus ,
                SituacionFiscal:'Sin buro'
               
            }

        }
     else
        {
            return{
                TipoEstatus:'Casado',
                SituacionFiscal:'En buro'
            }
        }    

}
//desestructuracion
const {nombre,edad}= persona;


console.log(nombre);
console.log(edad);
console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
persona.nombre='juan luis';
persona.edad=17;
console.log(returnuser1(persona));
// primera forma
const estatus=returnuser1(persona);
const {TipoEstatus,SituacionFiscal} = estatus;
//segunda
//const {TipoEstatus,SituacionFiscal} = returnuser1(persona);
console.log('La persona es ' + TipoEstatus +' y ' + SituacionFiscal);

