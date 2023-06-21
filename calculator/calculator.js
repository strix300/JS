// function printNumbers(from, to) {
	// timerId = setInterval(() => {console.log(from); from++; if (from > to){clearInterval(timerId)}}, 500);
// }
// printNumbers(10,20);

/*function printNumbers(from, to) {
	setTimeout(function numb(){
		console.log(from);
		from++;
		if (from <= to){
		setTimeout(numb,1000)
		}
	},1000)
}
printNumbers(10,20);*/


/*function buildFun(n) {
	var res = [];
  
	for (let i = 0; i < n; i++) {
	  res.push(function fun() {
		return i; // Возвращаем значение i
	  });
	}
  
	return res;
  }
  
  let massiv = buildFun(5);
  
  for (var i = 0; i < massiv.length; i++) {
	console.log(massiv[i]());
  }*/

  /*function getAverage(marks) {
	let sum = 0;
	let average;
  
	for (let numb of marks) {
	  sum += numb;
	}
  
	average = Math.round(sum / marks.length);
	return average;
  }
  

  console.log(getAverage([2,2,2,2]));
  console.log(getAverage([1,2,3,4,5,]));
  console.log(getAverage([1,1,1,1,1,1,1,2]));
  console.log(getAverage([11,14,7,19,2,12]));*/


const button = document.getElementById("button");
const output = document.getElementById("output");

function calc() {
	const number1 = Number(document.querySelector(".firstinput").value);
	const number2 = Number(document.querySelector(".secondinput").value);
	let sign = document.getElementById("options");
	let result;

switch(sign.value){
	case '+':
		result = number1 + number2;
		break;
	case '-':
		result = number1 - number2;
		break;
	case '*':
		result = number1 * number2;
		break;
	case '/':
		result = number1 / number2;
		break;
}
const resultElement = document.createElement('div');
resultElement.textContent = result;
output.appendChild(resultElement);

resultElement.addEventListener('click', function() {
	resultElement.parentNode.removeChild(resultElement);
});
}

button.addEventListener('click', calc);