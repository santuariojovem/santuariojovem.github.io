const menuHeader = document.querySelector(".menuHeader");
const menuHeaderFundo = document.querySelector(".menuHeaderFundo");
const barrasExibir = document.querySelector(".barrasExibir");
const fecharMenu = document.querySelector(".fecharMenu");

function exibeMenuHeader() {
    document.body.classList.add('no-scroll');
    menuHeader.style.display = 'block';
    menuHeaderFundo.style.display = 'block';
    barrasExibir.style.display = 'none';
    fecharMenu.style.display = 'block';
    menuHeader.classList.add('exibeMenuHeader');
    menuHeader.classList.remove('escondeMenuHeader');
}

function escondeMenuHeader() {
    document.body.classList.remove('no-scroll');
    menuHeader.classList.remove('exibeMenuHeader');
    menuHeader.classList.add('escondeMenuHeader');
    setTimeout(() => {
        menuHeader.style.display = 'none';
    }, 950);
    setTimeout(() => {
        menuHeaderFundo.style.display = 'none';
    }, 700);
    barrasExibir.style.display = 'block';
    fecharMenu.style.display = 'none';
}

menuHeaderFundo.addEventListener("click", escondeMenuHeader);

function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}