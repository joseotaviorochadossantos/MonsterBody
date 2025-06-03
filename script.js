document.addEventListener('DOMContentLoaded', () => {
  // Criar botão de modo de alto contraste
  const contrastBtn = document.createElement('button');
  contrastBtn.textContent = 'Ativar Alto Contraste';
  contrastBtn.setAttribute('aria-pressed', 'false');
  contrastBtn.style.position = 'fixed';
  contrastBtn.style.top = '10px';
  contrastBtn.style.right = '10px';
  contrastBtn.style.zIndex = '1000';
  contrastBtn.style.padding = '10px';
  contrastBtn.style.backgroundColor = '#000';
  contrastBtn.style.color = '#fff';
  contrastBtn.style.border = 'none';
  contrastBtn.style.cursor = 'pointer';

  document.body.appendChild(contrastBtn);

  // Função para alternar o modo de alto contraste
  contrastBtn.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
    const isActive = document.body.classList.contains('high-contrast');
    contrastBtn.setAttribute('aria-pressed', isActive.toString());
    contrastBtn.textContent = isActive ? 'Desativar Alto Contraste' : 'Ativar Alto Contraste';
  });

  document.getElementById('accessibilityButton').addEventListener('click', function () {
    let options = document.getElementById('accessibilityOptions');
    options.classList.toggle('hidden');
});

function increaseFontSize() {
    document.body.style.fontSize = (parseInt(getComputedStyle(document.body).fontSize) + 2) + "px";
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

function highlightLinks() {
    document.querySelectorAll('a').forEach(link => {
        link.classList.toggle('highlight');
    });
}


  // Navegação por teclado: pressionar números para ir às seções
  document.addEventListener('keydown', (e) => {
    switch(e.key) {
      case '1':
        document.querySelector('.sobre')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '2':
        document.querySelector('.alunos')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '3':
        document.querySelector('.turmas')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '4':
        document.querySelector('.empresa')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '5':
        document.querySelector('.objetivos')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '6':
        document.querySelector('.diferenciais')?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  });
});

  // Mostrar ou esconder o botão de voltar ao topo
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// Ação do botão
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Detectar quando as seções entram na viewport
const sections = document.querySelectorAll('section');

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

document.getElementById('darkModeToggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

function adjustFontSize(action) {
  let body = document.body;
  let currentSize = parseInt(window.getComputedStyle(body).fontSize);
  body.style.fontSize = action === 'increase' ? (currentSize + 2) + "px" : (currentSize - 2) + "px";
}

function searchContent() {
  let input = document.getElementById('searchBar').value.toLowerCase();
  let sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
      section.style.display = section.innerText.toLowerCase().includes(input) ? "block" : "none";
  });
}


function adjustFontSize(action) {
  let body = document.body;
  let currentSize = parseInt(window.getComputedStyle(body).fontSize);
  
  if (action === 'increase') {
      body.style.fontSize = (currentSize + 2) + "px";
  } else if (action === 'decrease' && currentSize > 12) {
      body.style.fontSize = (currentSize - 2) + "px";
  }
}

function adjustFontSize(action) {
  let elements = document.querySelectorAll("body, h1, h2, p, li");
  
  elements.forEach(element => {
      let currentSize = parseFloat(window.getComputedStyle(element).fontSize);
      
      if (action === "increase") {
          element.style.fontSize = (currentSize + 2) + "px";
      } else if (action === "decrease") {
          element.style.fontSize = (currentSize - 2) + "px";
      }
  });
}
function increaseFontSize() {
  document.body.style.fontSize = "20px"; // Ajuste conforme necessário
}
function increaseSubtitleSize() {
  document.querySelectorAll("h2").forEach(title => {
      title.style.fontSize = "24px"; // Ajuste conforme necessário
  });
}


