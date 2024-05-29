// import * as tf from '@tensorflow/tfjs';

// Nombres de las bandas
const bands = ["Nirvana", "AC/DC", "Queen", "Taylor Swift", "Ariana Grande", "Billie Eilish", "Los Ángeles Azules", "Sonora Dinamita", "Grupo Cañaveral", "Marc Anthony", "Gilberto Santa Rosa", "Rubén Blades", "Daddy Yankee", "J Balvin", "Bad Bunny", "Eminem", "Drake", "Kanye West", "Metallica", "Iron Maiden", "Black Sabbath", "Johnny Cash", "Dolly Parton", "Willie Nelson", "The Chainsmokers", "Calvin Harris", "David Guetta", "Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Bob Marley", "Peter Tosh", "Toots and the Maytals", "2Pac", "The Notorious B.I.G.", "Jay-Z", "The Ramones", "The Clash", "2 minutos"];

// Géneros
const genres = ["rock", "pop", "cumbia", "salsa", "reggaeton", "rap", "metal", "country", "electronic", "classical", "reggae", "hipHop", "punk"];

// Asociación de bandas con géneros
const bandGenres = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Nirvana
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // AC/DC
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Queen
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Taylor Swift
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Ariana Grande
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Billie Eilish
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Los Ángeles Azules
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Sonora Dinamita
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Grupo Cañaveral
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Marc Anthony
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Gilberto Santa Rosa
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Rubén Blades
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], // Daddy Yankee
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], // J Balvin
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], // Bad Bunny
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], // Eminem
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], // Drake
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], // Kanye West
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // Metallica
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // Iron Maiden
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // Black Sabbath
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // Johnny Cash
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // Dolly Parton
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // Willie Nelson
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // The Chainsmokers
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // Calvin Harris
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // David Guetta
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], // Ludwig van Beethoven
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], // Wolfgang Amadeus Mozart
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], // Johann Sebastian Bach
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // Bob Marley
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // Peter Tosh
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // Toots and the Maytals
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // 2Pac
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // The Notorious B.I.G.
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // Jay-Z
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // The Ramones
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // The Clash
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 2 minutos
];

// Crear un objeto para almacenar las puntuaciones de las bandas
let bandRatings = {};

// Crear elementos de entrada para cada banda
for (let i = 0; i < bands.length; i++) {
    const band = bands[i];
    const bandElement = document.createElement('div');
    bandElement.classList.add('row', 'mb-3'); // Añade la clase 'row' y 'mb-3' para separación

    const bandLabel = document.createElement('div');
    bandLabel.classList.add('col-6'); // Añade la clase 'col-6' para ocupar la mitad del ancho
    bandLabel.innerHTML = `<label>${band}:</label>`;
    bandElement.appendChild(bandLabel);

    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('col-6'); // Añade la clase 'col-6' para ocupar la mitad del ancho

    for (let j = 1; j <= 10; j++) {
        const button = document.createElement('button');
        button.textContent = j;
        button.dataset.band = band; // Añade el atributo de datos 'band'
        button.classList.add('btn', 'btn-light', 'mr-1', 'rating-btn'); // Añade las clases de botón de Bootstrap
        button.addEventListener('click', function () {
            // Desactivar todos los botones de esta banda
            const buttons = document.querySelectorAll(`.rating-btn[data-band="${band}"]`);
            buttons.forEach((btn) => {
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-light');
            });
            // Activar el botón clicado
            button.classList.remove('btn-light');
            button.classList.add('btn-primary');
        });
        buttonGroup.appendChild(button);
    }
    bandElement.appendChild(buttonGroup);
    document.getElementById('bandList').appendChild(bandElement);
}

// Procesar la información cuando se hace clic en el botón
document.getElementById('submitBtn').addEventListener('click', async () => {
    // Crear arrays para almacenar las puntuaciones y los índices de los géneros
    const ratings = [];
    // Procesar las puntuaciones de las bandas
    for (let i = 0; i < bands.length; i++) {
        const band = bands[i];
        let ratingFound = false;
        const buttons = document.querySelectorAll(`.rating-btn[data-band="${band}"]`);
        for (let j = 0; j < buttons.length; j++) {
            const button = buttons[j];
            if (button.classList.contains('btn-primary')) {
                ratings.push(j + 1);
                ratingFound = true;
                break;
            }
        }
        if (!ratingFound) {
            // Si no se encontró una calificación, asignar una calificación predeterminada de 0
            ratings.push(0);
        }
    }

    // Convertir ratings a un tensor 2D
    const ratingsTensor = tf.tensor2d([ratings]);

    // Realizar la multiplicación de matrices
    const user_feats = tf.matMul(ratingsTensor, bandGenres);

    // Asegúrate de que 'k' es menor o igual a la última dimensión de user_feats
    const k = Math.min(genres.length, user_feats.shape[user_feats.shape.length - 1]);

    // Ahora puedes llamar a tf.topk() sin problemas
    const top_user_features = tf.topk(user_feats, k);
    // Back to JavaScript
    const top_genres = top_user_features.indices.arraySync()
    // Mapear los géneros del usuario
    const rankedCategories = top_genres[0].map((v) => genres[v]);

    // Mostrar los resultados
    const resultsRating = document.getElementById('results');
    const selectedBand = document.getElementById('selectedBand'); // Asegúrate de tener un elemento con id 'selectedBand'
    const topValues = top_user_features.values.arraySync()[0];

    // Ocultar la lista de bandas
    selectedBand.style.display = 'none';
    const voteAgainButton = document.createElement('button');
    voteAgainButton.textContent = 'Votar de nuevo';
    voteAgainButton.classList.add('btn', 'btn-primary', 'mt-3');
    voteAgainButton.addEventListener('click', function () {
        selectedBand.style.display = 'block';
        resultsRating.innerHTML = '';
        resetVoting();
    });
    // si existe por lo menos un valor diferente de 0
    if (topValues.some((value) => value !== 0)) {
        resultsRating.innerHTML = '<h2>Tus géneros de música favoritos:</h2>';
        rankedCategories.forEach((category, i) => {
            if (topValues[i] !== 0) {
                const categoryElement = document.createElement('p');
                categoryElement.textContent = `${category}`;
                resultsRating.appendChild(categoryElement);
            }
        })
        resultsRating.appendChild(voteAgainButton);
    }
    else {
        resultsRating.innerHTML = '<h2>No tienes ningún género favorito</h2>';
        resultsRating.appendChild(voteAgainButton);
    }
})

function resetVoting() {
    const buttons = document.querySelectorAll('.rating-btn');
    buttons.forEach((button) => {
        button.classList.remove('btn-primary');
        button.classList.add('btn-light');
    });
}

document.getElementById('submitBtn').addEventListener('click', async () => {

    // Crear arrays para almacenar las puntuaciones y los índices de los géneros
    const ratings = [];
    // Procesar las puntuaciones de las bandas
    for (let i = 0; i < bands.length; i++) {
        const band = bands[i];
        let ratingFound = false;
        const buttons = document.querySelectorAll(`.rating-btn[data-band="${band}"]`);
        for (let j = 0; j < buttons.length; j++) {
            const button = buttons[j];
            if (button.classList.contains('btn-primary')) {
                ratings.push(j + 1);
                ratingFound = true;
                break;
            }
        }
        if (!ratingFound) {
            // Si no se encontró una calificación, asignar una calificación predeterminada de 0
            ratings.push(0);
        }
    }

    console.log(ratings, genres);


    // Crear los tensores
    let newArray = [];
    let count = 0
    bandGenres.forEach((row, bandsIndex) => {
        row.forEach((value, genreIndex) => {
            if (value === 1) {
                count = count + 1;
                newArray.push({
                    value: count,
                    band: bands[bandsIndex],
                    genre: genres[genreIndex],
                    genreMatch: genreIndex
                });
            }
        });
    });
    console.log(newArray);
    console.log(ratings);

    const genresValues = newArray.map(obj => obj.genreMatch);
    const genresTensor = tf.tensor2d([genresValues], [1, newArray.length]);
    const ratingsTensor = tf.tensor2d([ratings], [1, ratings.length]);

    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 12, inputShape: [ratings.length] }))
    model.add(tf.layers.dense({ units: ratings.length }))

    // Compilar el modelo
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
    console.log('Entrenando el modelo...');
    Swal.fire({
        title: 'Entrenando el modelo...',
        text: 'Por favor, espera un momento.',
        imageUrl: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
    })

    await model.fit(ratingsTensor, genresTensor, { epochs: 100 });
    console.log('¡Modelo entrenado!');
    Swal.fire({
        title: '¡Gracias por votar!',
        text: 'Tus géneros de música favoritos han sido registrados.',
        icon: 'success',
        timer: 2000,
    })

    const prediction = model.predict(ratingsTensor);
    const values = prediction.arraySync()[0];
    console.log('values', values);
    const maxIndex = values.indexOf(Math.max(...values));
    console.log('maxIndex', maxIndex);
    const genre = genres[maxIndex];
    console.log('genre', genre);
    document.getElementById('results2').textContent = `Tu género de música favorito es ${genre}`;

})