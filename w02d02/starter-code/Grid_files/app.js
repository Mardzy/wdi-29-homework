$(() => {

  function generateGrid() {
    $('.active').removeClass('active');
    var randomNumbers = []; // create an empty array to push random numbers in to
    while(randomNumbers.length < 10){
      var randomNumber = Math.floor(Math.random()*50); // generate a random number between 0 and 49
      if(randomNumbers.indexOf(randomNumber) > -1) continue; // if randomNumber is already in the array, break out of the if block
      randomNumbers[randomNumbers.length] = randomNumber; // add randomNumber to the end of the randomNumbers array
    }

    randomNumbers.forEach((number) => { // loop through the randomNumbers array
      $('li').eq(number).addClass('active'); // find the li with the index of the random number and add the class of "active"
    });
  }

  generateGrid(); // you might want to invoke this somewhere else later

  const $start = $('.start');
  const $reset = $('.reset');
  const $timer = $('.timer');
  const $score = $('.score');

  let timerID = null;
  let timerIsRunning = false;
  let timeRemaining = 5;
  let score = 0;



  $start.on('click', () =>{
    generateGrid();
    timerIsRunning = !timerIsRunning;
    if(timerIsRunning){
      $('.active').on('click',() => {
        $score.text(score++);
        $('.active').removeClass('.active');

      });
      start();
    } else {
      clearInterval(timerID);
    }
  });

  function start() {
    timerID = setInterval(() =>{
      if(timeRemaining===0){
        clearInterval(timerID);
        $timer.addClass('ringing');
      } else {
        timeRemaining--;
        $timer.text(timeRemaining);
      }
    }, 1000);
  }

  $reset.on('click',()=>{
    console.log('reset');
    $score.text('0');
  });

  // function resetTimer() {
  //   $timer.text(timeRemaining);
  //   clearInterval(timerID);
  //   timerIsRunning = false;
  // }
});
