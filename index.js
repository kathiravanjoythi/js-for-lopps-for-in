// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

 // forlopps
 for (let f = 1; f <=7; f++) {
  console.log(f)
  if (f==5){
  break;
  }
  }
 // for in
   let rank = ["kathiravan", "kumaran", 34, 67]
    for(let k in rank) {
      console.log(k,rank[k])
    }
  let car = {color: 'black', price: 500000}
 for(let k in car) {
 console.log(k , car[k])
 }