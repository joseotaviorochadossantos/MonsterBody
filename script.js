document.addEventListener('DOMContentLoaded', () => {

  // Alto contraste
  const accessibilityBtn = document.getElementById('accessibilityButton');
  accessibilityBtn.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      accessibilityBtn.setAttribute('aria-pressed', document.body.classList.contains('high-contrast'));
  });

  // Dark mode (opcional: só se houver botão com id="darkModeButton")
  const darkModeBtn = document.getElementById('darkModeButton');
  if (darkModeBtn) {
      darkModeBtn.addEventListener('click', () => {
          document.body.classList.toggle('dark-mode');
          darkModeBtn.setAttribute('aria-pressed', document.body.classList.contains('dark-mode'));
      });
  }

  // Ajuste de fonte
  window.adjustFontSize = function(action) {
      // Ajusta html para escalar tudo, não só body
      const root = document.documentElement;
      let style = window.getComputedStyle(root).fontSize;
      let fontSize = parseFloat(style);

      if (action === 'increase' && fontSize < 24) {
          root.style.fontSize = (fontSize + 2) + 'px';
      }
      if (action === 'decrease' && fontSize > 12) {
          root.style.fontSize = (fontSize - 2) + 'px';
      }
  };

  // Navegação por teclado para seções (teclas 1 a 6)
  document.addEventListener('keydown', (e) => {
      if (['1','2','3','4','5','6'].includes(e.key)) {
          const idx = parseInt(e.key) - 1;
          const sections = document.querySelectorAll('main section');
          if (sections[idx]) sections[idx].scrollIntoView({ behavior: 'smooth' });
      }
  });

  // Botão "Voltar ao Topo"
  const backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          backToTopBtn.style.display = 'block';
      } else {
          backToTopBtn.style.display = 'none';
      }
  });
  backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Busca simples nas seções
  window.searchContent = function() {
      const input = document.getElementById('searchBar').value.toLowerCase();
      const sections = document.querySelectorAll('main section');
      const results = document.getElementById('searchResults');
      results.innerHTML = '';

      if (input.length > 1) {
          sections.forEach(section => {
              if (section.textContent.toLowerCase().includes(input)) {
                  const li = document.createElement('li');
                  const title = section.querySelector('h2') ? section.querySelector('h2').innerText : "Seção";
                  li.textContent = title;
                  li.style.cursor = 'pointer';
                  li.onclick = () => section.scrollIntoView({ behavior: 'smooth' });
                  results.appendChild(li);
              }
          });
          if (results.innerHTML === '') {
              const li = document.createElement('li');
              li.textContent = 'Nenhum resultado encontrado.';
              results.appendChild(li);
          }
      }
  };

  // Efeito fade-in nas seções ao aparecer
  const sections = document.querySelectorAll('main section');
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });
  sections.forEach(section => {
      section.classList.add('fade-in');
      observer.observe(section);
  });

  // Destacar links (opcional se quiser usar highlightLinks)
  window.highlightLinks = function() {
      document.querySelectorAll('a').forEach(link => {
          link.classList.toggle('highlight');
      });
  };

});