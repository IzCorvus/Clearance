// Script to handle loading screen and main content display
window.addEventListener('load', function() {
    setTimeout(function() {
      const loader = document.getElementById('loading-screen');
      loader.classList.add('fade-out');
  
      setTimeout(function() {
        loader.style.display = 'none';
        document.querySelector('.main-content').style.display = 'flex';
        document.body.style.overflow = 'auto'; // Enable scrolling after loading
      }, 500);
    }, 2000); // Keep loading screen for 2 seconds
  });
  