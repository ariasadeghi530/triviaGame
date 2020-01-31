//  API url `https://opentdb.com/api.php?amount=10&category=${}&type=multiple`

//  categories range from 9 - 32

let category = 9;
let choices = [];
let answers = [];
let score = 0;



  fetch('https://opentdb.com/api_category.php')
  .then(r => r.json())
  .then(({trivia_categories}) => {
    trivia_categories.forEach( (elem) => {
      let promptOpt = document.createElement('a');
      promptOpt.class = "dropdown-item";
      promptOpt.href ="#";
      promptOpt.value = elem.id;
      promptOpt.textContent = elem.name;
      promptWrap.innerHTML = promptOpt
      document.getElementById('dropdown').append(promptWrap);
    })
  })
  .catch(e => console.error(e));



// document.getElementById('beginGame').addEventListener('click', event => {
//   category = document.getElementById('promptChoices').value;

// get the 10 questions and choices for each 
fetch(`https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`)
  .then(r => r.json())
  .then(({ results }) => {
    results.forEach((elem, index) => {
      let question = results[index].question;
      let choices = (results[index].incorrect_answers)
      let answer = results[index].correct_answer;
      answers.push(answer);
      choices.push(results[index].correct_answer);
      shuffleArray(choices);
      console.log(question, choices);
      console.log(answers)
      renderQuestions(question, choices);
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
// create cards to contain elements and render on page
function renderQuestions(question, choices) {
  let questionDiv = document.createElement('div');
  question.class = "card-body"
  questionDiv.innerHTML = `
  <h5 class="card-title">${question}</h5>
  <div>
    <button type="button" class="btn btn-light btn-lg btn-block btn-light">
    ${choices[0]}
    </button>
  </div>
  <div>
    <button type="button" class="btn btn-primary btn-lg btn-block btn-light">
    ${choices[1]}
    </button>
  </div>
  <div>
    <button type="button" class="btn btn-primary btn-lg btn-block btn-light">
    ${choices[2]}
    </button>
  </div>
  <div>
    <button type="button" class="btn btn-primary btn-lg btn-block btn-light">
    ${choices[3]}
    </button>
  </div>
  
  `
  document.getElementById('game').append(questionDiv);
}


//to check for answers, if the one they select is answers.includes(answer selection) then score++
