const input = require('fs').readFileSync('data.txt').toString().split(/\r\n/g);
const drawOrder = input.splice(0,1)[0].split(",");

const cardSize = 5;
let bingoCards = [];
while(input.length > 0){
	input.splice(0, 1);
  	const card = input.splice(0, 5).map(e=>e.split(/\s+/).filter(e=>e).map(e=>{ return {val:parseInt(e), status:0}}));
   	bingoCards.push(card);
}

function dumpCard(card){
  card.forEach(row=> {
    console.log(row.map(e=>e.status))
  })
  console.log("\n")
}

function markNumber(n, card){
	card.map(row=>{
    	row.map(cell=>{
        	if(cell.val == n){
            	cell.status = 1;
            }
        })
    });
}


function isWinningCard(card){
  	// find winning col
	for(let i = 0; i<cardSize;i++){
    	if(card.every(row=>row[i].status != 0)){
          	return true;
        	break;
        }
    }
	// find winning row
  	return card.some(row=>row.every(cell => cell.status != 0))
}

function calculateScore(card, multiplier){
  	let sum = 0;
	card.forEach(row=>{
    	row.filter(cell => cell.status == 0).forEach(cell=>{
			sum += cell.val;
        })
    });
  	return sum * multiplier;
}

let finalScore = -Infinity;
for(let i of drawOrder){
  	bingoCards.forEach(card=>markNumber(i, card));
  	if(bingoCards.some(isWinningCard)){
		console.log(i);
		finalScore = calculateScore(bingoCards.find(isWinningCard), i);
		break;
	}
}

console.log(finalScore);
