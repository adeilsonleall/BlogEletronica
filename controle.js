const imgMenu = document.getElementById('img-menu');
const mainMenu = document.getElementById('main-menu');
const pathImgClose = 'img/fechar.png';
const pathImgMenu = 'img/menu.png';
let menuOpen = false;

/* Codificação do Botão de exibição Menu */
imgMenu.addEventListener('click', function(){ 
    mainMenu.classList.toggle('main-menu-close');
    if(mainMenu.classList.value==='main-menu-open main-menu-close'){
        imgMenu.setAttribute('src',pathImgMenu);
    }else{
        console.log(false); 
        imgMenu.setAttribute('src',pathImgClose);
    }
});