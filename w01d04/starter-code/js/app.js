alert('Welcome to the Calculator');
let repeat = 'y';

while (repeat === 'y') {
  const operation = prompt('What would you like to do? (a)dd (s)ubtract (m)ultiply (d)ivide (po)wer or (sq)r root');

  if (operation === 'sq') {
    const number1 = parseFloat(prompt('Enter your number'));
    alert(Math.sqrt(number1));

  } else {
    const number1 = parseFloat(prompt('Enter your first number'));
    const number2 = parseFloat(prompt('Enter your second number number'));

    switch(repeat === 'y') {
      case operation === 'a':
        alert(number1 + number2);
        break;
      case operation === 's':
        alert(number1 - number2);
        break;
      case operation === 'm':
        alert(number1 * number2);
        break;
      case operation === 'd':
        alert(number1 / number2);
        break;
      case operation === 'po':
        alert(Math.pow(number1, number2));
        break;
      default :
        alert('Invavlid operator');
    }
    //***while(!['a'],['s'],['m'],['d'],['po'],['sq'].includes)***
    // if (operation === 'a'){
    //   alert(number1 + number2);
    // } else if(operation  === 's') {
    //   alert(number1 - number2);
    // } else if(operation  === 'm') {
    //   alert(number1 * number2);
    // } else if(operation  === 'd') {
    //   alert(number1 / number2);
    // } else if(operation === 'po') {
    //   alert(Math.pow(number1, number2));
    // } else {
    //   alert('Invavlid operator');
    // }

    //Add Mortgage calculator, BMI calculator & Trip calculator
  }
  repeat = prompt('Would you like to use the calulator again? (y)es/(n)o?');
}
