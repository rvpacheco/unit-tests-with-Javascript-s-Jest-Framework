// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    
    let valueInEuro = valueInDollar / 1.2;
    let valueInYenes = valueInEuro * 127.9;
    return valueInYenes;
}

const fromYenToPound = function(valueInYenes){
    
    let valueInEuro = valueInYenes / 127.9;
    let valueInPound = valueInEuro * 0.8;
    return parseFloat(valueInPound.toFixed(1));
}
// esta es mi funcion que suma dos numeros 
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la funcion para usarla en otros archivos
// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar,fromDollarToYen, fromYenToPound }