//variables down here

const $active = $('.active');
const $start = $('.start');
const $timer = $('.timer');
const $reset = $('.reset');
const $lis = $('li');
const $score = $('.score');
const $topScore = $('.topScore');

let timerValue = 5;
let timerId = null;
let score = 0;
let topScore = 0;

//functions down here

function generateGrid() {
  $active.removeClass('active');
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

function countDown() {
  if(timerValue > 0) {
    timerValue --;
    $timer.text(timerValue);
  } else {
    clearTimeout(timerId);
  }
}

function reset() {
  clearTimeout(timerId);
  timerValue = 5;
  $timer.text(timerValue);
  $lis.removeClass('active');
}

function hideStart(e) {
  $(e.target).css('visibility', 'hidden');
  $reset.css('visibility', 'visible');
}

function clickStart(e) {
  if(timerValue === 5){
    generateGrid();
    timerId =  setInterval(countDown, 1000);
    hideStart(e);
  }
}

function applyTopScore() {
  if(score > topScore) {
    topScore = score;
    $topScore.text(topScore);
  }
}

function resetScore() {
  score = 0;
  $score.text(score);
}

function hideReset(e) {
  $(e.target).css('visibility', 'hidden');
  $start.css('visibility', 'visible');
}

function clickReset(e) {
  if(timerValue === 0) {
    reset();
    applyTopScore();
    resetScore();
    hideReset(e);
  }
}

function successfulClick(e) {
  if($(e.target).hasClass('active') && timerValue > 0) {
    score ++;
    $score.text(score);
    $(e.target).removeClass('active');
  }
}

//Event listeners down here

$start.on('click',clickStart);

$reset.on('click', clickReset);

$lis.on('click', successfulClick);
