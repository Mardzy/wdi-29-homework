// $(() => {
//
//   function generateGrid() {
//     $('.active').removeClass('active');
//     var randomNumbers = []; // create an empty array to push random numbers in to
//     while(randomNumbers.length < 10){
//       var randomNumber = Math.floor(Math.random()*50); // generate a random number between 0 and 49
//       if(randomNumbers.indexOf(randomNumber) > -1) continue; // if randomNumber is already in the array, break out of the if block
//       randomNumbers[randomNumbers.length] = randomNumber; // add randomNumber to the end of the randomNumbers array
//     }
//
//     randomNumbers.forEach((number) => { // loop through the randomNumbers array
//       $('li').eq(number).addClass('active'); // find the li with the index of the random number and add the class of "active"
//     });
//   }
//
//   generateGrid(); // you might want to invoke this somewhere else later
//
//   const $start = $('.start');
//   const $reset = $('.reset');
//   const $timer = $('.timer');
//   const $score = $('.score');
//   const $grid = $('.grid');
//   let timerID = null;
//   let timerIsRunning = false;
//   let timeRemaining = 5;
//   let score = 0;
//
//   $grid.on('click','li',(e)=>{
//     if (timerIsRunning){
//       if($(e.target).hasClass('.active')){
//         $(e.target).removeClass('.active');
//         score++;
//         $score.text(score++);
//       }
//     }
//   });
//
//
//   $start.on('click', () =>{
//     if (!timerIsRunning){
//       score = 0;
//       generateGrid();
//       // timerIsRunning = true;
//     }
//     timerIsRunning = !timerIsRunning;
//     if(timerIsRunning){
//
//       start();
//     } else {
//       clearInterval(timerID);
//     }
//   });
//
//   function start() {
//     timerID = setInterval(() =>{
//       if(timeRemaining === 0){
//         clearInterval(timerID);
//       } else {
//         timeRemaining--;
//         $timer.text(timeRemaining);
//       }
//     }, 1000);
//   }
//
//   $reset.on('click',()=>{
//     console.log('reset');
//     $score.text('0');
//   });
//
//   // function resetTimer() {
//   //   $timer.text(timeRemaining);
//   //   clearInterval(timerID);
//   //   timerIsRunning = false;
//   // }
// });
$(() => {

  function generateGrid() {
    $('.active').removeClass('deactivated');
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


  const $start = $('.start');
  const $timer = $('.timer');
  const $grid = $('.grid');
  const $scoreDisplay = $('.score');
  let timeRemaining = 5;
  let running = false;
  let timerId = null;
  let score = 0;

  $start.on('click', () => {
    if(!running) {
      score = 0;
      $scoreDisplay.text(score);
      clearInterval(timerId);
      running = true;
      timeRemaining = 5;
      $timer.text(`Time remaining: ${timeRemaining} seconds`);
      generateGrid();
      $start.addClass('disabled');
      timerId = setInterval(() => {
        if(timeRemaining !== 0) {
          timeRemaining--;
          $timer.text(`Time remaining: ${timeRemaining} seconds`);
        } else {
          running = false;
          $('.active').addClass('deactivated');
          $start.removeClass('disabled');
        }
      },1000);
    }
  });
  function addScore() {
    score++;
    $scoreDisplay.text(score);
  }
  
  $grid.on('click', 'li', (e) => {
    if(running) {
      if($(e.target).hasClass('active')) {
        $(e.target).removeClass('active');
        addScore();
      }
    }
  });

});
