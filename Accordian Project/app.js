//using selectors inside the element


const questions=document.querySelectorAll('.question')
questions.forEach((question) => {
  // console.log(question);
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    questions.forEach((item)=>{
      // console.log(item);
      
if(item!==question){
  item.classList.remove('show-text')
}


    })
    question.classList.toggle("show-text");
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", (e) => {
//     const answer = e.currentTarget.parentElement.parentElement;
//     if (!answer.classList.contains("show-text")) {
//       answer.classList.add("show-text");
//     } else {
//       answer.classList.remove("show-text");
//     }
//   });
// });
