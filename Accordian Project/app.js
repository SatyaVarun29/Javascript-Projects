//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  console.log(question);
  
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    // console.log(question.classList)
    questions.forEach((item) => {
      console.log(item);
      
      if (item != question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
    
  });
});

// traversing the dom

// const btns=document.querySelectorAll('.question-btn')
// btns.forEach((btn)=>{
//  btn.addEventListener('click',function(e){
//     const qtn=( e.currentTarget.parentElement.parentElement)
//     if(!qtn.classList.contains('show-text')){
//       qtn.classList.add('show-text')
//     }
//     else{
//       qtn.classList.remove('show-text')
//     }

//  })
// })
