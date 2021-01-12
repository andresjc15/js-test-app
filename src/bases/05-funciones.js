
// Funciones en JS

// const saludar = function ( nombre ) {
//     return `Hola ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
    return `Hola ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola ${ nombre }`;

const saludar4 = () => `Hello world`;

// console.log( saludar('Felipe') );

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4() );

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Elpapu154'
    }
}
const user = getUser();
console.log( user );

const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC1563',
        username: nombre
    })

const ususarioActivo = getUsuarioActivo('Erling');
console.log( ususarioActivo );