/** @type { import('./observeElementVisible')['default'] } */
function observeElementVisible(target, cb) {

  let observer = new IntersectionObserver((entries) => {
    let entry = entries[0];
    if (entry && cb) {
      cb({
        target: entry.target,
        visible: entry.isIntersecting,
      });
    }
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  observer.observe(target);

  return observer;

}

export default observeElementVisible;
