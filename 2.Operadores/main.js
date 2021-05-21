console.log("Hello world!");

function mitades(numeros) {
    var resultado = [];
    var numero = 42;

    for (var i = 0; i <numeros.length; i++) {
        var numero = numeros[i];
        var mitad = numero / 2;
        resultado.push(mitad);
    }

    console.log('numero' , numero);
    console.log('mitad' , mitad);
    console.log('i',i)

    return resultado;
}

fetch