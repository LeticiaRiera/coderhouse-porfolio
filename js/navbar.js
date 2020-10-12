var activeNavItem = $('.nav-item');

activeNavItem.click(function(){
  activeNavItem.removeClass('active');
  $(this).addClass('active');  
});

/*
$('#main-nav li a').on('click', function() {
  var activeLink = $('.active');
  activeLink.removeClass('active'); 
  $(this).parent().addClass('active');
});*/