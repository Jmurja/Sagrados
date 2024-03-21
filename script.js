document.addEventListener('DOMContentLoaded', function() {
    var banner = document.querySelector('.banner');
  
    function handleScroll() {
      var bannerRect = banner.getBoundingClientRect();
      var bannerMidPoint = window.scrollY + bannerRect.top + (bannerRect.height / 4);
  
      if (window.scrollY > bannerMidPoint) {
        banner.classList.add('hidden');
      } else {
        // Se a rolagem for menor que a metade da altura da banner, mostra a banner
        banner.classList.remove('hidden');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  