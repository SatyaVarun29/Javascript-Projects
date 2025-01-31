const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById('btn')
const color=document.querySelector('.color')

btn.addEventListener('click',()=>{
    let numbers=randomNumbers()
    console.log(numbers);
   
    document.body.style.backgroundColor=colors[numbers]
    color.textContent=colors[numbers]
})


function randomNumbers(){
   return Math.floor(Math.random()*colors.length)
}