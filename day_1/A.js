const input = require('fs').readFileSync('data.txt').toString();

let last = Infinity;
let score = 0;
for(let line of input.split("\n").filter(e=>e.length > 0)){
  	const next = parseInt(line)
	if(next > last){
      score++;
    }
  	last = next;
}

console.log(score);