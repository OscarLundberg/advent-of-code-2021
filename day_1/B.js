const input = require('fs').readFileSync('data.txt').toString();
const lines = input.split("\n").map(e=>parseInt(e));

let last = Infinity;
let score = 0;
for(let i = 0; i<lines.length - 2; i++){
	const sum = lines[i] + lines[i+1] + lines[i+2];
 	if(sum > last){
 		score++;
    }  
  	last = sum;
}
console.log(score);