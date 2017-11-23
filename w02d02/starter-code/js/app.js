// Wait for the DOM to load
// Grab the display elements from the DOM
// Grab the buttons from the DOM using jQuery
// Add the click event listener to the buttons
// Test that the event listener is working by console logging something!
// Store the user's choice
// Dislpay the user's choice
// Game logic
// Create a computer choice (random choice between rock, paper or scissors)
// Display the computer's choice
// Compare the user choice with the computer choice
// Display who has won
// Implement reset button (clear the displays)
$(() => {
  const $game = $('.game');
  const $playerOne = $('.player1');
  const $playerTwo = $('.player2');
  const $result = $('.result');
  const $choice = $('.choice');
  const $reset = $('.reset');
  const array = ['rock','paper','scissors','lizard','Spok'];
  let wins = 0;
  let losses = 0;
  let ties = 0;

  const $winScore = $('<span class="winScore"></span>');
  const $winContainer = $('<p>Wins :</p>');
  $winContainer.append($winScore);
  $game.append($winContainer);
  $game.append('<p>Losses :<span class="lossScore"></span></p>');
  $game.append('<p>Draws :<span class="drawScore"></span></p>');

  $choice.on('click',(event) => {
    const playerTwo = array[[Math.floor(Math.random() * array.length)]];
    $playerTwo.text(playerTwo);
    const playerOne = $(event.target).text();
    $playerOne.html(playerOne);

    if( playerOne === 'rock' && playerTwo === ('scissors' || 'lizard') ||
    playerOne === 'scissors' && playerTwo === ('paper' || 'lizard') ||
    playerOne === 'paper' && playerTwo === ('rock' || 'Spok')||
    playerOne === 'lizard' && playerTwo === ('paper' || 'Spok')||
    playerOne === 'Spok' && playerTwo === ('scissors' || 'rock')){
      $result.text('It\'s a win for the good guys!');
      wins++;
      $('.winScore').html(wins);
    } else if (playerOne === playerTwo) {
      $result.text('We\'ve a stand off here....');
      ties++;
      $('.drawScore').html(ties);
    } else {
      $result.text('Data processor');
      losses++;
      $('.lossScore').html(losses);
    }
    console.log(wins, losses, ties);
  });

  $($reset).click(() => {
    $result.text('');
    $playerOne.text('');
    $playerTwo.text('');
    $('.winScore').text('');
    $('.lossScore').text('');
    $('.drawScore').text('');
  }
  );
});
