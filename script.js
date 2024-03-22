document.addEventListener('DOMContentLoaded', function() {
    var banner = document.querySelector('.banner');
    var header = document.querySelector('header'); // Seleciona o header
    var bannerOriginalOffsetTop = banner.offsetTop; // Posição original da banner no topo da página
    var bannerHeight = banner.offsetHeight; // Altura da banner
  
    function handleScroll() {
      var scrollY = window.pageYOffset || document.documentElement.scrollTop;
  
      // Calcula a metade da altura da banner a partir do seu topo original
      var bannerDisappearPoint = bannerOriginalOffsetTop + (bannerHeight / 2);
  
      // Verifica se a página foi rolada além da metade da altura da banner
      if (scrollY > bannerDisappearPoint) {
        // Se sim, esconde a banner suavemente
        banner.classList.add('hidden');
        header.classList.add('header-black'); // Muda o fundo do header para preto
      } else {
        // Se não, garante que a banner está visível
        banner.classList.remove('hidden');
        header.classList.remove('header-black'); // Restaura o fundo original do header
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  