$(document).ready(function(){
  $('#navUl').hide(); // hide the navUl on page load

  $('#navSpan').mouseenter(function(){
    $('#navUl').slideDown();
  });
  $('#navUl').mouseleave(function(){
    $('#navUl').slideUp();
  });
  $('#navSpan').mouseleave(function(){ // add this event handler
    setTimeout(function() { // set a timeout to wait for a short moment
      if (!$('#navUl').is(':hover')) { // check if the navUl is not being hovered over
        $('#navUl').slideUp(); // slide up the navUl
      }
    }, 200); // wait for 200 milliseconds before checking the hover state
  });
});



  const allBoxes = document.getElementById('allBoxes');

  for (let i = 0; i < 19; i++) {
    const outerBox = document.createElement('div');
    outerBox.className = 'outerBox';

    const box = document.createElement('div');
    box.className = 'box';

    const logo = document.createElement('img');
    logo.className = 'logo';
    logo.src = 'logo.jpg';
    logo.alt = 'a logo';

    const title = document.createElement('span');
    title.className = 'title';
    title.textContent = 'Name of app';

    const description = document.createElement('span');
    description.className = 'description';
    description.textContent = 'Lorem ipsum dolor';

    box.appendChild(logo);
    box.appendChild(title);
    box.appendChild(description);

    outerBox.appendChild(box);

    allBoxes.appendChild(outerBox);
  }

