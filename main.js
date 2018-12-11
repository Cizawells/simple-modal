//Selecting Elements
let mybutton = document.getElementById('openbutton');
let closeButton = document.getElementById('closebutton');
let modal = document.getElementById('modal');
let modalContent = document.getElementById('modal-content');


//Adding EventListener
mybutton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
window.addEventListener('click', closeModal2);


//functions definitions
function openModal(){
  modal.style.display = 'block';
}
function closeModal(){
  modal.style.display = 'none';
}
function closeModal2(e){
  if(e.target == modal){
      modal.style.display = 'none';
  }
}
