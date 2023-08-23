const display = document.querySelector(".display")
const buttons = document.querySelectorAll("button")
const operators = ["%", "*", "/", "-", "+", "="]
let output = "";

const calc = (btnValue) => {
    if (btnValue === "=" && btnValue !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DL") {
        output = output.toString().slice(0, -1);
    } else {
        if(output === "" && operators.includes(btnValue)) return;
        output += btnValue;
    }
    

    display.value = output;

};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calc(e.target.dataset.value));
});