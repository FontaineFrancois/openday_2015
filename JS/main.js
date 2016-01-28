$(function() {
  $(window).scroll(function() { //Au scroll dans la fenetre on déclenche la fonction
    if ($(this).scrollTop() > 75) { //si on a défilé de plus de 10px du haut vers le bas
      $('#num_2').addClass("fixNavigation"); //on ajoute la classe "fixNavigation"
    } else {
      $('#num_2').removeClass("fixNavigation"); //sinon on retire la classe "fixNavigation"
    }
  });
});
