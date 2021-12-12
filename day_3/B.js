const input = require('fs').readFileSync('data.txt').toString();

const map = {};
const avg = {};   
let count = 0

function selectArr(arr, lengthTest){
	return arr [arr.map(a=>a.length)
				.indexOf(lengthTest(...arr.map(a=>a.length)))];
}

function keepValues(arr, lookupIndex, keeperTest, fallbackValue){
	const map = {};
  	arr.forEach(val => {
		const curVal = val[lookupIndex];
      	(map[curVal] = map[curVal] || []).push(val);
    })
  	const arrays = Object.values(map);
	if(arrays[0].length === arrays[1].length){
    	return arr.filter(e => e[lookupIndex] == fallbackValue);
    }
	
	return keeperTest(arrays);
}

const longest = (arrays) => selectArr(arrays, Math.max);
const shortest = (arrays) => selectArr(arrays, Math.min);

const keepMostCommon = (arr, ind) => keepValues(arr, ind, (arrs)=>longest(arrs), 1);
const keepLeastCommon = (arr, ind) => keepValues(arr, ind, (arrs)=>shortest(arrs), 0);

let allNumbers = input.split("\n");
let oxygenGeneratorRating = [...allNumbers];
let co2ScrubberRating = [...allNumbers];

for(let index = 0; index<allNumbers[0].length;index++){
  if(oxygenGeneratorRating.length > 1) {
  	oxygenGeneratorRating = keepMostCommon(oxygenGeneratorRating, index);
  }
  if(co2ScrubberRating.length > 1){
   	co2ScrubberRating = keepLeastCommon(co2ScrubberRating, index); 
  }
}

let ogr = parseInt(oxygenGeneratorRating, 2);
let c2sr = parseInt(co2ScrubberRating, 2);
console.log(ogr * c2sr);



