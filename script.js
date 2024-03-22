document.addEventListener('DOMContentLoaded', function() {
    var banner = document.querySelector('.banner');
    var header = document.querySelector('header'); 
    var bannerOriginalOffsetTop = banner.offsetTop; 
    var bannerHeight = banner.offsetHeight;
  
    function handleScroll() {
      var scrollY = window.pageYOffset || document.documentElement.scrollTop;
      var bannerDisappearPoint = bannerOriginalOffsetTop + (bannerHeight / 2);
  

      if (scrollY > bannerDisappearPoint) {
        banner.classList.add('hidden');
        header.classList.add('header-black');
      } else {
        banner.classList.remove('hidden');
        header.classList.remove('header-black'); 
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  