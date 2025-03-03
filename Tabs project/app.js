const about=document.querySelector('.about')

const btns=document.querySelectorAll('.tab-btn')
const content=document.querySelectorAll('.content')


about.addEventListener('click',function(e){
const id=e.target.dataset.id
if(id){
    btns.forEach(function(btn){
     btn.classList.remove('active')
    })
   
   content.forEach(function(article){
    article.classList.remove('active')
   })
const element=document.getElementById(id)


element.classList.add('active')
}
})