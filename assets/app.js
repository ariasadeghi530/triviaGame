//  API url `https://opentdb.com/api.php?amount=10&category=${}&type=multiple`

//  categories range from 9 - 32

let category = 9;

fetch(`https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`)
  .then(r => r.json())
  .then(({ results }) =>{
  console.log(results[0]);
})
.catch(e => console.error(e));

