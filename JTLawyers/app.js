(() => {
  const routes = {
    'Overview': 'index.html',
    'Workspace Overview': 'index.html',
    'Documents': 'documents.html',
    'Secretary': 'secretary.html',
    'Team Workforce': 'workforce.html',
    'Workforce': 'workforce.html',
    'Training & Instructions': 'training.html',
    'AI Workforce Configuration': 'configuration.html'
  };

  document.addEventListener('click', (event) => {
    const target = event.target.closest('a, button');
    if (!target) return;
    const label = (target.textContent || '').replace(/\s+/g, ' ').trim();
    const match = Object.keys(routes).find((key) => label === key || label.includes(key));
    if (match) {
      event.preventDefault();
      window.location.href = routes[match];
    }
  });
})();
