//  API url `https://opentdb.com/api.php?amount=10&category=${}&type=multiple`

//  categories range from 9 - 32

let category = 9;
let choices = [];
let answers = [];
let score = 0;



// document.getElementById('beginGame').addEventListener('click', event => {
//   category = document.getElementById('promptChoices').value;

  // get the 10 questions and choices for each 
  fetch(`https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`)
  .then(r => r.json())
  .then(({results}) =>{
    results.forEach((elem, index) => {
      let question = results[index].question;
      let choices = (results[index].incorrect_answers)
      let answer = results[index].correct_answer;
      answers.push(answer);
      choices.push(results[index].correct_answer);
      shuffleArray(choices);
      console.log(question, choices);
      
    });
  })
  .catch(e => console.error(e));
  
// })


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function renderQuestions(question, choices) {
  
}

//to check for answers, if the one they select is answers.includes(answer selection) then score++
