const openModalBtn=document.getElementById("modalBtn");
const closeModalBtn=document.getElementById("closeBtn");
const modalSection=document.querySelector(".modal-section");


openModalBtn.addEventListener('click', function(){
    modalSection.classList.add("modal-show");
});

closeModalBtn.addEventListener('click', function(){
    modalSection.classList.remove("modal-show");
});

