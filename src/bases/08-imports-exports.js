
// import { heroes } from './data/heroes';
import heroes from '../data/heroes';

// console.log( owners );

export const getHeroesById = ( id ) => {
    return heroes.find( e => e.id === id );
}

// console.log( getHeroesById(4) );

export const getHeroesByOwner = ( owner ) => {
    return heroes.filter( heroe => heroe.owner === owner )
}

// console.log( getHeroesByOwner('DC') );