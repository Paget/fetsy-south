function processHash() {
    var hash = location.hash || '#';

    if (!r.run(hash.slice(1))) {
      app.pageNotFound();
    }
  }

  window.addEventListener('hashchange', processHash);
  processHash();
