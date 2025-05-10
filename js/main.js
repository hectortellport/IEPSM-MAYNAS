const hideModal=document.querySelector(".modal_cerrar");

const modal=document.querySelector('.modal');


hideModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.add('modal_hide');
});