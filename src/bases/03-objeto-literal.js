
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 54211,
        lat: 14.351345,
        lng: 135.5445564
    }
};

// console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );