const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const btnTopo = document.getElementById('btnTopo');
const formContato = document.getElementById('form-contato');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('ativo-menu');
  });
}

window.addEventListener('scroll', () => {
  if (btnTopo) {
    btnTopo.style.display = window.scrollY > 250 ? 'block' : 'none';
  }
});

if (btnTopo) {
  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if (formContato) {
  formContato.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    formContato.reset();
  });
}
