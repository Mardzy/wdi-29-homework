$(() => {
  // WATCH
  const $watch = $('#watch');
  const $watchScreen = $watch.find('.screen');
  let now = new Date();

  function currentTime() {
    return  now.toLocaleTimeString();
  }


  function startClock() {
    currentTime();
    $watchScreen.text(currentTime());

    setInterval(() =>{
      now = new Date();
      currentTime();
      $watchScreen.text(currentTime());
    },1000);
  }

  startClock();

  // TIMER
  const $timer = $('#timer');
  const $timerScreen = $timer.find('.screen');
  const $startStopBtn = $timer.find('#startStop');
  const $resetBtn = $timer.find('#reset');

  // add event listeners to $startStopBtn & $resetBtn
  $startStopBtn.on('click', () =>{
    timerIsRunning = !timerIsRunning;
    if(timerIsRunning){
      startStopTimer();
    } else {
      clearInterval(timerID);
    }
  });

  let timerIsRunning = false;

  let timeRemaining = 10;
  let timerID = null;

  function startStopTimer() {
    timerID = setInterval(() =>{
      if(timeRemaining===0){
        clearInterval(timerID);
        $timer.addClass('ringing');
      } else {
        timeRemaining--;
        $timerScreen.text(timeRemaining);
      }
    }, 1000);
  }
  $resetBtn.on('click', () => {
    resetTimer();
  });

  function resetTimer() {
    $timer.removeClass('ringing');
    $timerScreen.text(timeRemaining);
    timeRemaining = 10;
    clearInterval(timerID);
    timerIsRunning = false;
    // stop the timer
    // remove the "ringing" class
    // reset the timeRemaining

  }
});
