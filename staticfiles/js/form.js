const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

const mainContent = document.getElementById('main-content');

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    if (mainContent) mainContent.style.display = 'none';
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    if (mainContent) mainContent.style.display = '';
});

const termsLink = document.getElementById('terms-link');
  const modal = document.getElementById('terms-modal');
  const closeModal = document.getElementById('close-modal');

  termsLink.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'flex';
  });

  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Optional: Close modal if clicking outside the content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
