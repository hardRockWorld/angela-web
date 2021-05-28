// fizz buzz game: every 3rd number will print fizz and every 5th number will print buzz and if both 3 & 5 then fizz buzz will be printed

var output = [];
var count = 1;

function fizzBuzz() {
  // write your code here
  while (count < 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push('FizzBuzz');
    } else if (count % 3 === 0) {
      output.push('Fizz');
    } else if (count % 5 === 0) {
      output.push('Buzz');
    } else {
      output.push(count);
    }

    count++;
  }

  console.log(output);
}

// calling the function
fizzBuzz();
