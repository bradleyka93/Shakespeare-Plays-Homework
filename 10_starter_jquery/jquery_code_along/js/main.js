// PART 1 - Functions review
// 1. Write a function and name it addMagic
	// Inside the function, log "Magic!" to the console using console.log()

  function addMagic (){
    console.log("Magic!");
  }


// 2. Call the addMagic function.

addMagic ();

$('button').on('click', function(){
  $('h1').text("hi");
  $('h1').css('color', 'red');
  $('h2').addClass('special');
  $('.fun-list').children().fadeToggle('600');
});
