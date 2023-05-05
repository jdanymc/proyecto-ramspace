const btnAbrir = document.querySelector('.car-widget');
const btnCerrar = document.querySelector('.miniheader__cerrar');
const modal = document.querySelector('#modal');

btnAbrir.addEventListener('click', ()=>{
    modal.style.right = '0';
});

btnCerrar.addEventListener('click', ()=>{
    modal.style.right = '-100vw';
});
