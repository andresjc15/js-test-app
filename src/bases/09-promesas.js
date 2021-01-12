import { getHeroesById } from './bases/08-imports-exports'

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () => {
//         const p1 = getHeroesById(2);
//         reject( 'Nose puedo encontrar el heroe' );
//         // resolve();
//     }, 2000 );

// });

// promesa.then( (heroe) => {
//     console.log('heroe: ', heroe);
// })
// .catch( err => console.warn( err ));

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            const p1 = getHeroesById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'Nose puedo encontrar el heroe' );
            }

        }, 2000 );
    
    });
    
}

getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn );