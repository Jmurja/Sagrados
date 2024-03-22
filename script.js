document.addEventListener('DOMContentLoaded', function() {
    let banner = document.querySelector('.banner');
    let header = document.querySelector('header'); 
    let bannerOriginalOffsetTop = banner.offsetTop; 
    let bannerHeight = banner.offsetHeight;
  
    function handleScroll() {
      let scrollY = window.pageYOffset || document.documentElement.scrollTop;
      let bannerDisappearPoint = bannerOriginalOffsetTop + (bannerHeight / 2);
  

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
  