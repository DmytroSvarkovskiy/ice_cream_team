(() => {
  const refs = {
    openArrowBtn: document.querySelector('.arrow-open-btn'),
    closeArrowBtn: document.querySelector('.arrow-close-btn'),
    arrow: document.querySelector('.arrow-menu'),
    body: document.querySelector('body'),
  };

  refs.openArrowBtn.addEventListener('click', toggleArrow);
  // refs.closeArrowBtn.addEventListener('click', toggleArrow);

  function toggleArrow() {
    refs.arrow.classList.toggle('is-hidden');
  }
})();
