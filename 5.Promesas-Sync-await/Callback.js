
//se encarga de que la primera() fucio se ejecute 

function primero(){
    setTimeout(function(){
        console.log("Primero")
        segundo();
    },3000)
}

function segundo(){
    console.log("Segundo")
}

primero();
