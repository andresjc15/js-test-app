
// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'soldado'
};

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const context = ({ nombre, clave, edad, rango = 'Capitan' }) => {

    // console.log( edad, nombre, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 15.12,
            lng: -84.132
        }
    }
}

const { nombreClave, anios, latlng, latlng: { lat, lng } } = context( persona );

console.log(nombreClave, anios);
console.log(latlng);
console.log( lat, lng );
