window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loading-screen');
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
      document.querySelector('.main-content').style.display = 'flex';
      document.body.style.overflow = 'auto';
    }, 500);
  }, 2000);
});
  