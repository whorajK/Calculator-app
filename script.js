const display = document.querySelector("#display");
const operandBtns = document.querySelectorAll(".operand");
const operatorBtns = document.querySelectorAll(".operator");

const deleteBtn = document.querySelector("#delete");
const clearBtn = document.querySelector("#clear");
const evaluateBtn = document.querySelector("#evaluate");

// GET USER INPUT AND DISPLAY
operandBtns.forEach((operand) => {
	operand.addEventListener("click", (e) => {
		display.value += operand.textContent;
	});
});

operatorBtns.forEach((operator) => {
	operator.addEventListener("click", (e) => {
		display.value += operator.textContent;
	});
});

// EVALUATE
function evaluate() {
	let result = [];
	let evaluation;

	if (display.value.includes("+")) {
		result = display.value.split("+");
		evaluation = parseInt(result[0]) + parseInt(result[1]);

		display.value = evaluation;
	} else if (display.value.includes("−")) {
		result = display.value.split("−");
		evaluation = parseInt(result[0]) - parseInt(result[1]);

		display.value = evaluation;
	} else if (display.value.includes("×")) {
		result = display.value.split("×");
		evaluation = parseInt(result[0]) * parseInt(result[1]);

		display.value = evaluation;
	} else {
		result = display.value.split("÷");
		evaluation = parseInt(result[0]) / parseInt(result[1]);

		display.value = evaluation;
	}
}

// UPDATE CALCULATOR DISPLAY
function updateDisplay() {
	clearBtn.addEventListener("click", () => {
		display.value = "";
	});

	deleteBtn.addEventListener("click", () => {
		let string = display.value;
		string = string.substring(0, string.length - 1);

		display.value = string;
	});

	evaluateBtn.addEventListener("click", evaluate);
}

updateDisplay();
