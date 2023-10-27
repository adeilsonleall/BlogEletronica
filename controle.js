const imgMenu = document.getElementById('img-menu');
const mainMenu = document.getElementById('main-menu');

imgMenu.addEventListener('click', function(){
    console.log(mainMenu);
    mainMenu.classList.toggle('hidden');
});