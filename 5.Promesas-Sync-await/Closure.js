(function(){
    let color = 'green';
    function printColor(){
        console.log(color)
    }
    printColor();
})();


//
function makeColorPrinter(color){
    let colorMessage = `the color is ${color}`

    return function(){
        return colorMessage;
    }
}

let greenColorPointer = makeColorPrinter('red');
console.log(greenColorPointer());

//Variable privadas
const counter = {
    count : 3
};

console.log(counter.count)
counter.count = 99;
console.log(counter.count)


const makeCouter = (n) => {
    let count = n // private property
    return {
        increase: () => count +=1,
        decrease: () => count -= 1,
        getCount: () => count
    }
}

  let constd = makeCouter(7);

  console.log('The count is:', constd.getCount());
  constd.increase();
  console.log('The count is:', constd.getCount());
  constd.decrease();
  constd.decrease();
  constd.decrease();
  constd.decrease();
  console.log('The count is:', constd.getCount());

//   counter.count = 0;
//   console.log('The count is:', constd.getCount());

// counter.count = 0;

// console.log('the count is: ', counter.getCount());

