let resultContainer = document.querySelector("#result");
let previousNumber = document.querySelector("#previous-number");

function appendToResult(value) {
    resultContainer.value += value;
}

function appendToPrevious(value) {
    previousNumber.value += value;
}

function clearAll() {
    resultContainer.value = "";
    previousNumber.value = "";
}

function deleteLast() {
    if (resultContainer.value.length > 0) {
        resultContainer.value = resultContainer.value.slice(0, -3);
    } else if (previousNumber.value.length > 0) {
        previousNumber.value = previousNumber.value.slice(0, -3);
    }
}

function clearEntry() {
    if (resultContainer.value.length > 0) {
        resultContainer.value = resultContainer.value.slice(0, -1);
    } else if (previousNumber.value.length > 0) {
        previousNumber.value = previousNumber.value.slice(0, -1);
    }
}

function calculate() {
    try {
        const expression = previousNumber.value + resultContainer.value;
        const result = eval(expression);
        resultContainer.value = result.toFixed(2);
        previousNumber.value = "";
    } catch (error) {
        resultContainer.value = "Error";
    }
}

document.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('btn-input')) {
        appendToResult(target.textContent);
    }
    if (target.classList.contains('btn-operation')) {
        appendToPrevious(resultContainer.value + target.textContent);
        resultContainer.value = "";
    }
    if (target.classList.contains('equal')) {
        calculate();
    }
    if (target.classList.contains('clearAll')) {
        clearAll();
    }
    if (target.classList.contains('delete')) {
        deleteLast();
    }
});

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (/\d/.test(key) || key === '.') {  
        appendToResult(key);
    }
    if (/[+\-*/]/.test(key)) {  
        appendToPrevious(resultContainer.value + key);
        resultContainer.value = "";
    }
    if (key === 'Enter') {  
        event.preventDefault();  
        calculate();
    }
    if (key === 'Escape') {  
        clearAll();
    }
    if (key === 'Backspace') {  
        clearEntry();
    }
});
