$(() =>{

  let offset = 0;
  const $form = $('form');
  const $container = $('.container');
  const $input = $('#q');
  const $more = $('#more');

  $form.on('submit', function(e){
    e.preventDefault();
    $container.empty();
    getGifs();
  });

  $more.on('click', function(e){
    e.preventDefault();
    getMoreGifs();
  });

  function getMoreGifs(){
    // console.log('clicked');
    offset +=25;
    $.get(`http://api.giphy.com/v1/gifs/search?api_key=060b4fe8202f4d57a77858fac942bea2&q=${$input.val()}&offset=${offset}`)
      .done((gifs) => {
        gifs.data.forEach((gif) => {
          showGif(gif);
        });
      });
  }

  function getGifs() {
    $.get(`http://api.giphy.com/v1/gifs/search?api_key=060b4fe8202f4d57a77858fac942bea2&q=${$input.val()}`)
      .done((gifs) => {
        gifs.data.forEach((gif) => {
          showGif(gif);
        });
      });

  }

  function showGif(gif) {
    $container.prepend(`
     <img src="${gif.images.fixed_height.url}">
   `);
  }


});//last line
