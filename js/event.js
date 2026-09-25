document.addEventListener('DOMContentLoaded', function () {
  const attendBtn = document.getElementById('attendBtn');
  const likeBtn = document.getElementById('likeBtn');
  const header = document.querySelector('.event-header, .site-header');

  if (attendBtn) {
    attendBtn.addEventListener('click', function () {
      const isActive = attendBtn.classList.toggle('is-active');
      attendBtn.textContent = isActive ? 'Attending' : 'Attend';
      attendBtn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  if (likeBtn) {
    likeBtn.addEventListener('click', function () {
      const isActive = likeBtn.classList.toggle('is-active');
      const icon = likeBtn.querySelector('i');
      if (isActive) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
      } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
      }
      likeBtn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  if (header) {
    const toggleHeader = function () {
      if (window.scrollY > 0) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };

    toggleHeader();
    window.addEventListener('scroll', toggleHeader, { passive: true });
  }
});