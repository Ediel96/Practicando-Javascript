console.log("Hello world!");

function mitades(numeros) {
    let resultado = [];
    // let numero = 42;

    for (let i = 0; i <numeros.length; i++) {
        let numero = numeros[i];
        let mitad = numero / 2;
        resultado.push(mitad);
    }

    console.log('numero' , numero);
    console.log('mitad' , mitad);
    console.log('i',i)

    return resultado;
}

fetch