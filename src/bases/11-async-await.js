
// const getImagenPromise = () => {
//     const promesa = new Promise( (resolve, reject) => {
//         resolve('https://gagaga.com')
//     })
// }

const getImagen = async() => {

    try {
        const apiKey = 'M8BW7WREALbIOs500HKewt6GFsxckQ6W';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();

        console.log(data);
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    } catch (error) {
        console.log(error);
    }
    
}

getImagen();


// peticion
//     .then( resp => resp.json() )
//     .then( ({ data }) => {
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append( img );
//     })
//     .catch( console.warn );