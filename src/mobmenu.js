(() => {
  const refs = {
    openMobmenuBtn: document.querySelector('.menu-open-btn'),
    closeMobmenuBtn: document.querySelector('.menu-close-btn'),
    mobmenu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
  };

  refs.openMobmenuBtn.addEventListener('click', toggleMobmenu);
  refs.closeMobmenuBtn.addEventListener('click', toggleMobmenu);

  function toggleMobmenu() {
    refs.mobmenu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
