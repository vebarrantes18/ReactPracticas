

console.log('hola mundo');

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

const Alumno={
    nombre:'jaime',
    edad: 19, 
    Carrera: 'arquitectura', 
    domicilio: { 
        ciudad: 'Culiacan',
        CP:80019,
        colonia: 'LOMAS DEL SOL',
    }
    

}

const Alumno2 ={...Alumno};
Alumno2.nombre='capi';
console.log(empleado);
console.log(Alumno);
console.log(Alumno2);





