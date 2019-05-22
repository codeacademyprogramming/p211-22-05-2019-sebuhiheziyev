// const qdmButton = document.getElementById("my-btn");
// let i = 1;

// qdmButton.onclick = function() {
//   if(i <= 10)
//   {
//     const newDiv = document.createElement("div");
//     newDiv.setAttribute("class", "inner");
//     newDiv.innerText = i++;

//     const wrapper = document.getElementById("wrapper");
//     wrapper.appendChild(newDiv);
//   }
//   else{
//     alert("This is the end, baby!");
//   }
// };

// function SumNumbers(numbers)
// {
//   let total = 0;
//   let countOfEvens = 0;

//   for(let i = 0; i < numbers.length; i++)
//   {
//     if(numbers[i] % 2 === 0)
//     {
//       total += numbers[i];
//       countOfEvens++;
//     }
//   }

//   return total / countOfEvens;
// }

// const sum = SumNumbers([10, 20, 15, 3, 4]);
// console.log(sum);

let names = [
  "Samir",
  "Aqil",
  "Amelie",
  "Sebine",
  "Gul",
  "Resad",
  "Ali - serdce"
];

// for(let i = 0; i < names.length; i++)
// {
//   console.log(names[i]);
// }

let word = "Sa mir Qe dim Na dir Za kir";
let syllables = [];
let previousSyllable = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i] === " ") {
    let syllable = word.slice(previousSyllable, i);
    syllables.push(syllable);
    previousSyllable = i + 1;
  }
}
syllables.push(word.slice(previousSyllable));

console.log(syllables);
