const sumarLento = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1);
        }, 800);
    });
}

const sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1);
        }, 300);
    });
}

// Promise.race compite entre las promesas y devuelve la primera que se resuelve
Promise.race([sumarLento(5), sumarRapido(10)]) // esta promesa se resuelve con la promesa sumarRapido
    .then(respuestas => {
        console.log(respuestas);
        
    })
    .catch(console.log);