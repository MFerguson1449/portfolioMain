console.log('it works!');

const navBar = document.querySelector(".navBar");
const navName = document.querySelector(".navName");
window.onscroll = function() {
   navColor();
   navShowName();
}

function navColor() {
   if (document.documentElement.scrollTop > 800) {
      navBar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
      navName.style.right = '1%';
    } else { 
       navBar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
       navName.style.right = '-50%';
    }
}