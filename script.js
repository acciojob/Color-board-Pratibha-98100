//your JS code here. If required.

// Get all the squares
const squares = document.querySelectorAll('.square');

// Loop through all the squares
squares.forEach(square => {
  // Add event listener for mouseenter
  square.addEventListener('mouseenter', () => {
    // Change the background color to green
    square.style.backgroundColor = 'green';
    
    // Remove the background color after 1 second
    setTimeout(() => {
      square.style.backgroundColor = '';
    }, 1000);
  });
});





