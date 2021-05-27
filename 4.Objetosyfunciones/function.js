function parNumber(numeros){
    let resultadoPar = [];
    let resultadoImpart = [];

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 == 0){
            resultadoPar.push(numeros[i]);
        }else{
            resultadoImpart.push(numeros[i]);
        }    
    }

    return resultadoPar.sort((a,b) => {
        return a-b;
    });
}

const methOrder = numeros =>  numeros;


methOrder(2)