// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

 // forlopps
 for (let f = 1; f <=7; f++) {
  // console.log(f)
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
//  console.log(k , car[k])
 }

//  for of 
// string arrays
let marks = [10, 20, 30, 40]
for(let mark of marks) {
  // console.log(mark)
  if(mark == 30) {
    break;
  }
}

let lname = 'kumaran'
for(let nm of lname) {
  // console.log(nm)
  if(nm == 'r') {
    break;
  }
}

// break and continue
for(let i = 0; i <= 10; i++) {
  console.log(i)
  if(i==4) { 
    console.log('i 4', i)
    continue;
  }
}

// continue
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
