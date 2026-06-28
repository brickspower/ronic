const form = document.getElementById('applicationPackForm');
const successPanel = document.getElementById('successPanel');

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.setItem('jtLawyersDemoApplicationPack', JSON.stringify({ submittedAt: new Date().toISOString() }));
  form.hidden = true;
  successPanel.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
