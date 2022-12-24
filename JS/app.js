//DOM
const Rose = document.querySelector('#rose');
const close = document.getElementsByClassName('close')[0];
const Modal = document.querySelector('#modalRose'); 

//Recall
//Show the modal
Rose.addEventListener('click', () =>{
   Modal.style.display = 'block';
})
//CLOSE the Modal
close.addEventListener('click', () =>{
    Modal.style.display = 'none';
})
window.onclick = (event) =>{
    if(event.target === Modal){
        Modal.style.display = 'none';
    }
}