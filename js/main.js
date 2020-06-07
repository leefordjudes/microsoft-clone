const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', showMenu);

function showMenu() {
  const mainMenu = document.querySelector('.main-menu');
  mainMenu.classList.toggle('show');
}

// shorthand version of the above code
/*
document.querySelector('.menu-btn')
  .addEventListener('click', () => {
    document.querySelector('.main-menu')
      .classList.toggle('show');
  });

*/