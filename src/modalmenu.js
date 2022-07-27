(() => {
  const refs = {
    openModalmenuBtn: document.querySelector('.modalmenu-open-btn'),
    closeModalmenuBtn: document.querySelector('.modalmenu-close-btn'),
    modalmenu: document.querySelector('.modalmenu'),
    body: document.querySelector('body'),
  };

  refs.openModalmenuBtn.addEventListener('click', toggleModalmenu);
  refs.closeModalmenuBtn.addEventListener('click', toggleModalmenu);

  function toggleModalmenu() {
    refs.modalmenu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
