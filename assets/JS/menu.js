$(document).ready(function () {
  $('.menu-container').click(function () {
    $('.navigation ul').toggleClass('show');
    $(this).toggleClass('open');
  });

  // Close menu when a link is clicked
  $('.navigation ul li a').click(function () {
    $('.navigation ul').removeClass('show');
    $('.menu-container').removeClass('open');
  });
});

// Comment found error or mistake, rewrite redo 👇🏾