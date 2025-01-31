// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle=document.querySelector('.nav-toggle')
const links=document.querySelector('.links')

navToggle.addEventListener('click',()=>{
    const name=links.classList

    
    

//    if(name.contains('show-links')){
//     name.remove('show-links')
//    }
//    else{
//     name.add('show-links')
//    }

name.toggle('show-links')
})