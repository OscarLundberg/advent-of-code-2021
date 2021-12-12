const input = require('fs').readFileSync('data.txt').toString();

const map = {};
const avg = {};   
let count = 0

input.split("\n").forEach(line=>{
	for(let index = 0; index<line.length - 1;index++){
		const val = parseInt(line[index])
		map[index] = ((map[index]) ?? 0) + val;
		
		avg[index] = Math.round(map[index] / count);
	}
	count++;
})
const output = Object.values(avg);
const gamma = parseInt(output.join(""), 2)
const epsilon = parseInt(output.map(bit=> +(bit===0)).join(""), 2)
console.log(gamma * epsilon);