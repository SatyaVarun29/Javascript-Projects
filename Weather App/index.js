const Apikey='00392cd2c96c3caa0c61003b286fbf3e'
const Apiurl='https://api.openweathermap.org/data/2.5/weather?units=metric&q='


const temp=document.querySelector('.temp h2')
const place=document.querySelector('.temp h3')
const humidity=document.querySelector('.humidity h3')
const speed=document.querySelector('.speed h4')
const image=document.querySelector('.img')
const info=document.querySelector('.info')
const error=document.querySelector('.error')

const textinput=document.querySelector('.input input')
const inputbtn=document.querySelector('.input button')

async function checkweather(city) {
    const res=await fetch(Apiurl+city+`&appid=${Apikey}`)
    const data=await res.json()
    console.log(data)
    
    if(res.status==404){
     error.style.display='block'
     info.style.display='none'
    }
    else{
        error.style.display='none'
        temp.innerText=Math.round(data.main.temp)
        place.innerText=data.name
        humidity.innerText=data.main.humidity
        speed.innerText=data.wind.speed
        
        if(data.weather[0].main=='Clouds'){
        
         image.src='Images/cloudy.jpg'
        }
        else if(data.weather[0].main=='Haze'){
            image.src='Images/bright.jpg'
        }
        else if(data.weather[0].main=='Clear'){
        
            image.src='Images/sunny.jpg'
        }
        
        
        info.style.display='block'
        
        }
    }

inputbtn.addEventListener('click',()=>{
    
    checkweather(textinput.value)
})
