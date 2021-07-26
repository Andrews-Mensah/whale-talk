const input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let x = 0; x < input.length; x++){

  for (let y=0; y < vowels.length; y++){

    if (input[x] === vowels [y]){

      if (input[x] === 'e') {

        resultArray.push ('ee')

      }else if (input[x] === "u"){

        resultArray.push ('uu')

      }else { resultArray.push (input[x])

      }

    }

  }

}

console.log (resultArray.join('').toUpperCase())
