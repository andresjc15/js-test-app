
const nombre    = 'Andres';
const apellido  = 'Castelo';

const nombreCompleto = `Alohaa ${ nombre } ${ apellido }`;

console.log( nombreCompleto );

function getSaludo(nombre) {
    return 'Hola mundo' + nombre;
}

const urlParams = new URLSearchParams(window.location.search);
const desde = urlParams.get('desde');
const hasta = urlParams.get('hasta');

console.log(desde);
console.log(hasta);
console.log( `Este es un tecto: ${ getSaludo( 'AEAMAN' ) }` )