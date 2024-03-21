document.addEventListener('DOMContentLoaded', function() {
    var banner = document.querySelector('.banner');
    var bannerOriginalOffsetTop = banner.offsetTop;
    var bannerHeight = banner.offsetHeight; 
  
    function handleScroll() {
      var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        var bannerDisappearPoint = bannerOriginalOffsetTop + (bannerHeight / 3);
      if (scrollY > bannerDisappearPoint) {
        banner.classList.add('hidden');
      } else {
        banner.classList.remove('hidden');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  