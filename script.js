const imgMenu = document.querySelector('#imgMenu');
const barMenu = document.querySelector('.bar-menu');
const imgLogo = document.querySelector('#img-logo');



// Toggle Menu
imgMenu.addEventListener('click',()=>{
    barMenu.classList.toggle('hide-menu'); 
    if(barMenu.classList.value === 'bar-menu hide-menu'){
        imgMenu.classList.remove('rotate-scale-up');
        imgMenu.classList.add('rotate-scale-down');
        imgMenu.setAttribute('src','img/menu.png')
    }else{
        imgMenu.setAttribute('src','img/fechar.png');
        imgMenu.classList.remove('rotate-scale-down');
        imgMenu.classList.add('rotate-scale-up');
    }   
});

// Logo anime
setInterval(()=>{imgLogo.classList.toggle('pulse');},1500);