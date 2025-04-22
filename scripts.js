// Scroll suave ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({ behavior: 'smooth' });
    });
});

// Botão voltar ao topo
const btnTopo = document.createElement('button');
btnTopo.innerText = '↑';
btnTopo.id = 'btn-topo';
document.body.appendChild(btnTopo);

btnTopo.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 15px;
  font-size: 20px;
  background: #00d4ff;
  border: none;
  border-radius: 50%;
  color: #000;
  cursor: pointer;
  display: none;
  z-index: 1001;
`;

btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    btnTopo.style.display = window.scrollY > 400 ? 'block' : 'none';
});

// Animação ao rolar a página
const animar = document.querySelectorAll('.service-item, .hero-content');

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.style.opacity = 1;
            entrada.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

animar.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Obter os modais e os botões de abrir
var modal1 = document.getElementById("myModal1");
var openModalBtn1 = document.getElementById("openModalBtn1");
var closeBtn1 = document.getElementById("closeBtn1");

var modal2 = document.getElementById("myModal2");
var openModalBtn2 = document.getElementById("openModalBtn2");
var closeBtn2 = document.getElementById("closeBtn2");

// Quando o botão de Instalação e Reforma de PC de Luz é clicado, abre o modal1
openModalBtn1.onclick = function() {
    modal1.style.display = "block";
}

// Quando o "x" de Instalação e Reforma de PC de Luz é clicado, fecha o modal1
closeBtn1.onclick = function() {
    modal1.style.display = "none";
}

// Quando o botão de Baixa Tensão é clicado, abre o modal2
openModalBtn2.onclick = function() {
    modal2.style.display = "block";
}

// Quando o "x" de Baixa Tensão é clicado, fecha o modal2
closeBtn2.onclick = function() {
    modal2.style.display = "none";
}

// Fechar o modal se o usuário clicar fora da área do modal
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


