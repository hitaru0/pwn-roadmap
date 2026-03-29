 function toggleCard(card) {
    const expand = card.querySelector('.card-expand');
    expand.classList.toggle('open');
    const hint = card.querySelector('.toggle-hint');
    hint.textContent = expand.classList.contains('open') ? 'click to collapse ↑' : 'click to expand ↓';
    updateProgress();
  }

  function showPhase(id, btn) {
    document.querySelectorAll('.phase').forEach(p => {
      p.classList.remove('visible', 'show-all');
    });
    document.getElementById('phase-' + id).classList.add('visible');
    document.querySelectorAll('.phase-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  function showAll(btn) {
    document.querySelectorAll('.phase').forEach(p => {
      p.classList.remove('visible');
      p.classList.add('show-all');
    });
    document.querySelectorAll('.phase-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  function updateProgress() {
    const all = document.querySelectorAll('.check-row input[type="checkbox"]');
    const checked = document.querySelectorAll('.check-row input[type="checkbox"]:checked');
    const pct = all.length ? (checked.length / all.length) * 100 : 0;
    document.getElementById('prog-bar').style.width = pct + '%';
    document.getElementById('prog-text').textContent = checked.length + ' / ' + all.length + ' topics checked';
  }

  // Checkbox click handling
  document.addEventListener('change', function(e) {
    if (e.target.type === 'checkbox') {
      const row = e.target.closest('.check-row');
      if (e.target.checked) row.classList.add('checked');
      else row.classList.remove('checked');
      updateProgress();
    }
  });

  // Prevent card toggle when clicking checkbox
  document.addEventListener('click', function(e) {
    if (e.target.type === 'checkbox' || e.target.classList.contains('check-label')) {
      e.stopPropagation();
    }
  }, true);

  updateProgress();