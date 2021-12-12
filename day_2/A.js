const input = require('fs').readFileSync('data.txt').toString();
const course = input.split("\n").map(e=>{
  let pts = e.split(" ");
  return {direction: pts[0], magnitude:parseInt(pts[1])}
});

const directions = {
	"up": (pos, mag)=>{
    	return { d:pos.d - mag, h:pos.h }
    },
  	"forward": (pos, mag)=>{
      return { d:pos.d, h:pos.h + mag }
    },
  	"down":(pos, mag)=>{
      return { d:pos.d + mag, h:pos.h }
    }
}

let position = {h:0, d:0};
course.forEach(leg => {
	position = directions[leg.direction](position, leg.magnitude);
});
console.log(position.d * position.h);
