const form = document.getElementById('clientIntakeForm');
const successPanel = document.getElementById('successPanel');

form.addEventListener('submit', event => {
  event.preventDefault();
  const payload = Object.fromEntries(new FormData(form).entries());
  localStorage.setItem('jtLawyersDemoClientIntake', JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }));
  form.hidden = true;
  successPanel.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
