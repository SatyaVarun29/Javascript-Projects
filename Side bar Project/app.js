const togglebtn=document.querySelector('.sidebar-toggle')
const sidebar=document.querySelector('.sidebar')
const closebtn=document.querySelector('.close-btn')

togglebtn.addEventListener('click',()=>{

    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar')
    // }
    // else{
    //     sidebar.classList.add('show-sidebar')
    // }
    sidebar.classList.toggle('show-sidebar')
})
closebtn.addEventListener('click',()=>{
    sidebar.classList.remove('show-sidebar')

})