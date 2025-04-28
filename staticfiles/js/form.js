const q = s => document.querySelector(s),
      wrapper = q('.wrapper'),
      mainContent = document.getElementById('main-content'),
      modal = document.getElementById('terms-modal');

// Message logic: showMessage function
function showMessage(text, type = 'success') {
  let messagesContainer = document.querySelector('.messages');
  if (!messagesContainer) {
    messagesContainer = document.createElement('div');
    messagesContainer.className = 'messages';
    document.body.prepend(messagesContainer);
  }
  const message = document.createElement('div');
  message.className = `alert alert-${type}`;
  message.innerHTML = `
    <span>${text}</span>
    
    
  `;
  message.querySelector('.close-btn').onclick = function() {
    message.remove();
  };
  setTimeout(() => {
    message.remove();
  }, 5000);
  messagesContainer.appendChild(message);
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.messages .alert .close-btn').forEach(btn => {
    btn.onclick = function() {
      btn.closest('.alert').remove();
    };
  });
  setTimeout(() => {
    document.querySelectorAll('.messages .alert').forEach(msg => msg.remove());
  }, 5000);
});
q('.register-link').onclick = () => wrapper.classList.add('active');
q('.login-link').onclick = () => wrapper.classList.remove('active');
q('.btnLogin-popup').onclick = () => {
  wrapper.classList.add('active-popup');
  if (mainContent) mainContent.style.display = 'none';
};
q('.icon-close').onclick = () => {
  wrapper.classList.remove('active-popup');
  if (mainContent) mainContent.style.display = '';
};
q('#terms-link').onclick = e => {
  e.preventDefault();
  modal.style.display = 'flex';
};
q('#close-modal').onclick = () => modal.style.display = 'none';
window.onclick = e => e.target === modal && (modal.style.display = 'none');
