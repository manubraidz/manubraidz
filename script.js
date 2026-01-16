/* ESTRELAS */
const stars = document.querySelector('.stars');
for (let i = 0; i < 60; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  s.style.left = Math.random() * 100 + 'vw';
  s.style.top = Math.random() * 100 + 'vh';
  s.style.animationDelay = Math.random() * 3 + 's';
  stars.appendChild(s);
}

/* MODAL */
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
document.querySelectorAll('.card img').forEach(img => {
  img.onclick = () => {
    modal.classList.add('active');
    modalImg.src = img.src;
  };
});
document.getElementById('closeModal').onclick = () => {
  modal.classList.remove('active');
};

/* FILTRO */
document.querySelectorAll('.filters button').forEach(btn => {
  btn.onclick = () => {
    const f = btn.dataset.filter;
    document.querySelectorAll('.card').forEach(card => {
      card.style.display =
        f === 'all' || card.classList.contains(f) ? 'block' : 'none';
    });
  };
});
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

if (isMobile) {
  document.body.classList.add('mobile');
} else {
  document.body.classList.add('desktop');
}

