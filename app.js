//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll('.question-btn');

// as there is multiple btn we have to use selectorAll but also forEach
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    //console.log(e.currentTarget.parentElement.parentElement); // with parentElement we go up in the dom/tree

    // So creating const to access the article question using parent element of currentTarget
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
  });
});

//second method
// const questions = document.querySelectorAll('.question');

// questions.forEach(function (question) {
//   const btn = question.querySelector('.question-btn');
// we look inside the element not inside the document
//   // console.log(btn);

//   btn.addEventListener('click', function () {
//     // console.log(question);

//     questions.forEach(function (item) {
//       if (item !== question){ // if item doesnt match so remove article
//         item.classList.remove('show-text');
//       }
//     });

//     question.classList.toggle('show-text');
//   });
// });
