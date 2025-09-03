const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')

let currentInput = '';
let operator = null;
let firstOperand = null;

// function to handle button clicks
buttons.forEach(button => {
    button.addEventListener('click',(e) => {
        const value = e.target.innerText;

        // all clear (AC) button logic
        if(value === 'AC'){
            currentInput = '';
            display.value = '';
            operator = null;
            firstOperand = null;
          return;
        }

        // clear Entry (CE)
        if(value === 'CE') {
            currentInput =  currentInput.slice(0,-1);
            display.value = currentInput;
            return;
        }

        // equal (=) button logic
        if(value === '='){
            try{
                const result = eval(currentInput);
                display.value = result;
                currentInput = result.toString();
            }catch(error){
                display.value = 'no value detected';
                currentInput = '';
                if(display.value === "no value detected"){
                    document.getElementById("display").style.color = 'red';
                }
                else{
                    document.getElementById("display").style.color = 'green';
                }

            }
            return;
        }

        if(['+','-','*','/','%'].includes(value)){
              if(currentInput === ''|| ['+','-','*','/','%'].includes(currentInput.slice(-1))) {
                return;
              }
        }

        // append the clicked button to the display 
        currentInput += value;
        display.value = currentInput;
    })
})



