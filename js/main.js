$(document).foundation();
// Open Card Reveal Click
$('.open-button').click(function(){
  $(this).siblings('.card-reveal').toggleClass('open');
});

// Close Card Reveal Click
$('.close-button').click(function(){
  $(this).parent().parent('.card-reveal').toggleClass('open');
});

$("[data-circle-graph]").each(function() {
  var $graph = $(this),
      percent = parseInt($graph.data('percent'), 10),
      deg = 360*percent/100;
  if(percent > 50) {
    $graph.addClass('gt-50');
  }
  $graph.find('.circle-graph-progress-fill').css('transform','rotate('+ deg +'deg)');
  $graph.find('.circle-graph-percents-number').html(percent+'%');
});

$('[data-rating] .star').on('click', function() {
  var selectedCssClass = 'selected';
  var $this = $(this);
  $this.siblings('.' + selectedCssClass).removeClass(selectedCssClass);
  $this
    .addClass(selectedCssClass)
    .parent().addClass('is-voted');
});


  
  