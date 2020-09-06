console.log('it works!');

const navBar = document.querySelector(".navBar");
window.onscroll = function() {
   navColor();
}

function navColor() {
   if (document.documentElement.scrollTop > 600) {
      navBar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    } else { 
       navBar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
}