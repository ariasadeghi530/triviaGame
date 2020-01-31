//  API url `https://opentdb.com/api.php?amount=10&category=${}&type=multiple`

//  categories range from 9 - 32

let category = 9;
let choices = []


// document.getElementById('beginGame').addEventListener('click', (event) => {
//   category = document.getElementById('promptChoices').value;
  
// })


  fetch(`https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`)
  .then(r => r.json())
  .then(({ results }) =>{
    results.forEach((elem, index) => {
      let question = results[index].question;
      let choices = (results[index].incorrect_answers);
      choices.push(results[index].correct_answer);
      results[index];
      document.getElementById('title').innerHTML = `
      ${question}
      `
      document.getElementById('body').innerHTML = `
      ${choices}
      `

    });  
  
  })
  .catch(e => console.error(e));
  
