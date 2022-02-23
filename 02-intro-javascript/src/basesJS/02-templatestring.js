//template string

console.log('hola mundo');

const nombre=('victor ');
const apellido=('berrelleza');

let NombreCompleto = nombre + '' + apellido;
console.log(NombreCompleto);

if(true){
    let NombreCompleto=` 
    ${nombre} 
    ${apellido} 
    ${2+5}
    `;
    console.log(NombreCompleto);
}

console.log(NombreCompleto);

function getsaludo(NombreCompleto) {
 console.log('Hola mundo, un saludo para '+ NombreCompleto );
 return 'Hola mundo, un saludo para ' + NombreCompleto + ' bonito fin de semana';
}

getsaludo(NombreCompleto);

console.log(getsaludo(NombreCompleto));





