(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var toggles = document.querySelectorAll('[data-nav-toggle]');

    function closeAll(except) {
      toggles.forEach(function (btn) {
        if (btn === except) return;
        btn.setAttribute('aria-expanded', 'false');
        var menu = document.getElementById(btn.getAttribute('aria-controls'));
        if (menu) menu.hidden = true;
      });
    }

    toggles.forEach(function (btn) {
      var menu = document.getElementById(btn.getAttribute('aria-controls'));
      if (!menu) return;

      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = btn.getAttribute('aria-expanded') === 'true';
        closeAll(btn);
        btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        menu.hidden = isOpen;
      });
    });

    document.addEventListener('click', function () { closeAll(null); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAll(null);
    });
  });
})();
