let menu = document.querySelector('.js-menu');

function ativaMenu() {
    if (window.pageYOffset > 72) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
}

window.addEventListener('scroll', ativaMenu);



//identificar o clique no menu
let menuItems = document.querySelectorAll('.menu a')

//verificar o item que foi clicado e fazer referencia com o alvo
//estou usando o foreach pq para cada item dessa lista eu quero saber se ele foi clicado ou não
menuItems.forEach(item => {
    //add o evento de clique nesse item
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    //para descobrir qual o item foi clicado utilizamos o target
    let element = event.target;
    //e depois pegamos o atributo dele, ou seja, o href
    let atributo = element.getAttribute('href')
        //agora posso selecionar a seção especifica
        // o offssetTop pega a distancia entre o topo e o elemento
    let secao = document.querySelector(atributo).offsetTop
        // AGORA JÁ ESTA LINKANDO O LINK COM A SEÇÃO

    //verificar a distancia entre o alvo e o topo
    //esses dois parametros são de X e Y
    //o scrol faz acontecer
    window.scroll({
        // o 72 é o tamanho do menu
        top: secao - 72,
        //animar o scroll até o alvo
        behavior: "smooth",
    })
}

let btnItems = document.querySelectorAll('.js-agendar')
btnItems.forEach(btn => {
    btn.addEventListener('click', btnClick);
})

function btnClick(event) {
    event.preventDefault();
    let btnElement = event.target
    let btnAtributo = btnElement.getAttribute('href')
    let btnSecao = document.querySelector(btnAtributo).offsetTop

    window.scroll({
        top: btnSecao - 72,
        behavior: "smooth",
    })
}




// ANIMAÇÃO
// ----------------LÓGICA----------------
// 1° - selecionar os elementos que devem ser animados
let animacao = document.querySelectorAll('.anime');
// 2° - definir a classe que é ativada durante a animação
let animationClass = 'animate';
// 3° - criar função de animação
function animeScroll() {
    // 3.1° - verificar a distancia entre a barra e scroll e o topo do site
    let windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    animacao.forEach(function(elemento) {
        // 3.2° - verificar se a distancia do 3.1 + offset é maior do que a distancia entre o elemento e o topo da pg
        if ((windowTop) > elemento.offsetTop) {
            elemento.classList.add('animate');
        }
    })
    menuBurger.classList.remove('active')
}

// sempre que o usuário der scroll ativa a função
window.addEventListener('scroll', function() {
    animeScroll();
})

// 3.3° - se verdadeiro adicionar a classe de animação, remover se for falso
// 4° - ativar a função de animação toda vez que o usuário utilizar o scroll



// Menu mobile
let burger = document.querySelector('.js-burger');
let menuBurger = document.querySelector('.js-menu-mobile');

function ativaMobile() {
    menuBurger.classList.add('active');
}
let closeBtn = document.querySelector('.js-close');

function fechaMenu() {
    menuBurger.classList.remove('active')
}


closeBtn.addEventListener('click', fechaMenu);
burger.addEventListener('click', ativaMobile)
