window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelectorAll('button');


  for (var i = 0; i<button.length; i++){
    button[i].addEventListener('click' ,function() {
      this.children[0].play();
      
    });
  }


});
