(function () {
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem('fb-theme'); } catch (e) {}
  if (stored === 'dark' || stored === 'light') root.setAttribute('data-theme', stored);

  function setPressed(theme) {
    document.querySelectorAll('[data-theme-btn]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-theme-btn') === theme ? 'true' : 'false');
    });
  }

  function currentIsDark() {
    var attr = root.getAttribute('data-theme');
    if (attr === 'dark') return true;
    if (attr === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-theme-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var theme = btn.getAttribute('data-theme-btn');
        root.setAttribute('data-theme', theme);
        try { localStorage.setItem('fb-theme', theme); } catch (e) {}
        setPressed(theme);
      });
    });
    setPressed(currentIsDark() ? 'dark' : 'light');
  });
})();
