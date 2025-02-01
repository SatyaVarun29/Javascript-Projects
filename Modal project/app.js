// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modelbtn=document.querySelector('.modal-btn')
const modeloverlay=document.querySelector('.modal-overlay')
const closebtn=document.querySelector('.close-btn')

modelbtn.addEventListener('click',()=>{
    modeloverlay.classList.add('open-modal')
})

closebtn.addEventListener('click',()=>{
    modeloverlay.classList.remove('open-modal')
})