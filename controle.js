const imgMenu = document.getElementById('img-menu');
const mainMenu = document.getElementById('main-menu');
const pathImgClose = '/img/fechar.png';
const pathImgMenu = '/img/menu.png';
const menuOpen = false;

imgMenu.addEventListener('click', function(){
    mainMenu.classList.toggle('hidden');
    if(mainMenu.classList.value==='hidden'){
        imgMenu.setAttribute('src',pathImgMenu);
    }else{
        imgMenu.setAttribute('src',pathImgClose);
    }    
});