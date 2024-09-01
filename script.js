let a = 0, b = 1, c;
function fibonacci(num) {
// your code here
	if (num == 1) return a;

	for(let i = 2; i <= num; i++){
		c = a + b;
		a = b;
		b = c;
	}

	return c;
}

var n = Number(prompt("Enter Number"));

alert(fibonacci(n));
module.exports = fibonacci;
