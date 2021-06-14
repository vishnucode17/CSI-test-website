var menu = document.getElementsByClassName('hamburger')[0];
var hamburger = document.getElementsByClassName('hamburger')[0];
      function show_menu() {
        if (hamburger.style.display === 'flex'){
          document.body.style.overflow='visible';
          hamburger.style.display = 'none';
        }
        else{
          hamburger.style.display = 'flex';
          document.body.style.overflow='hidden';
          hamburger.style.textAlign='center';
        }
      }