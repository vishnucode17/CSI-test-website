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
var arrow = document.getElementById('arrow');
var arrow_visible = ()=>{
  if (arrow.style.visibility=='hidden'){
    arrow.style.visibility = 'visible';
  }
  else{
    arrow.style.visibility = 'hidden';
  }
}
window.setInterval(arrow_visible,500)