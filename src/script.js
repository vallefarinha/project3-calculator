let resultContainer = document.querySelector("#result");
let previousNumber = document.querySelector("#previous-number");

function printFirstNumber(event) {
    let buttonValue = event.target.textContent;
    resultContainer.value += buttonValue;
    return resultContainer.value;
    
}

document.addEventListener('click', function (event) {
     if (event.target.classList.contains('btn-input')) {
        printFirstNumber(event);
    }

    if (event.target.classList.contains('btn-operation')) {
        let meuArray = previousNumber.value.split(/([+\-*/])/);
        meuArray = meuArray.filter(item => item !== '')
        previousNumber.value +=  printFirstNumber(event);
        resultContainer.value = "";

    }

    if (event.target.classList.contains('equal')) {
      let operation = previousNumber.value += printFirstNumber(event);
      previousNumber.value = operation;
      operation = operation.slice(0, -1);
      console.log(operation);
      try {
        resultContainer.value = eval(operation);
    } catch (error) {
    }
    previousNumber.value = "";
        
    }

    if (event.target.classList.contains('clearAll')) {
        resultContainer.value = "";
        previousNumber.value = "";
    }

    if (event.target.classList.contains('delete')) {
        resultContainer.value = resultContainer.value.slice(0, -3);
        if(resultContainer.value == ""){
            previousNumber.value = previousNumber.value.slice(0, -1)
        }
    }
});

