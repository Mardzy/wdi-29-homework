
$(() =>{
  let remaining = 100;
  let width = 0;
  const $button = $('.btn');
  const $progressBar = $('.progress-bar');
  const $remaining = $('.remaining');

  function donation() {
    const value = $(this).data('id');
    remaining = remaining - value;
    width = value * 5 + width;
    $progressBar.css({width});
    $remaining.text(remaining);
    console.log(value);
    console.log(remaining);
  }

  $button.on('click', donation);

});
