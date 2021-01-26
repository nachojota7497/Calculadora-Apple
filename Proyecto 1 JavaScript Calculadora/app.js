var operator = null;
var inputValueMemo = 0;

function getContentClick(event){
   const value=event.target.innerHTML;
   filterAction(value);
}
const filterAction = value =>{
  value === "0" ? addNumberInput(0): null; 
  value === "1" ? addNumberInput(1): null; 
  value === "2" ? addNumberInput(2): null; 
  value === "3" ? addNumberInput(3): null;  //esto es igual a un if,es un ternario, pero es mas eficiente y ocupa menos memoria
  value === "4" ? addNumberInput(4): null; 
  value === "5" ? addNumberInput(5): null; 
  value === "6" ? addNumberInput(6): null; 
  value === "7" ? addNumberInput(7): null; 
  value === "8" ? addNumberInput(8): null; 
  value === "9" ? addNumberInput(9): null; 
  value === "," ? addNumberInput(','): null; 

  /*======================OPERADORES================== */
  value === "+" ? setOperator('+') : null;
  value === "-" ? setOperator('-') : null;
  value === "/" ? setOperator('/') : null;
  value === "x" ? setOperator('*') : null;   
  value === "+/-" ? setOperator('+/-') : null; 
  value === "%" ? setOperator('%') : null; 

  value === "=" ? calculation() : null;

  value === "AC" ? resetCalculator() : null;
  /*
  if(value==="0")
  addNumberInput(0);
  else null;
  */
}

function addNumberInput(value){
   const inputScreen = document.getElementsByClassName('calculator__screen')[0]; //aca capturo el valor del input
   const inputValue = inputScreen.value;

   if(inputValue === "0" &&  inputValue.length === 1 && value !== ","){
    inputScreen.value = value;
    return;
}   

    if(inputScreen.value === "" && value === ",")
    {
        inputScreen.value = 0 + value;
        return;
    }

inputScreen.value = inputValue + value;
}

function setOperator(operator){
    const inputSreenValue = document.getElementsByClassName('calculator__screen')[0].value;
    this.operator = operator;

    if(inputSreenValue != 0){
        calculation();
    }
    
}
function calculation(){
    const inputScreen = document.getElementsByClassName('calculator__screen')[0];
    let valueOne = transformComaToPoint(this.inputValueMemo);
    let valueTwo = transformComaToPoint(inputScreen.value);
    let total = 0;

    if(this.operator === "+" && inputScreen.value !== ""){
        total = valueOne + valueTwo;
    }
    if(this.operator === "-" && inputScreen.value !== ""){
       if(valueOne !== 0) 
       total = valueOne - valueTwo;
       else 
       total = valueTwo;
    }
    if(this.operator === "*" && inputScreen.value !== ""){
        if(valueOne !== 0)
         total = valueOne * valueTwo;
        else total = valueTwo;
    }
    if(this.operator === "/" && inputScreen.value !== ""){
        if(valueOne !== 0)
        total = valueOne / valueTwo;
       else total = valueTwo;
    }

    if(this.operator === "%"  && inputScreen.value !== ""){
        total = valueTwo / 100;
    }
    if(this.operator === "+/-"  && inputScreen.value !== ""){
        if(valueTwo > 0)
        total = -valueTwo;
    }

    total = transforPointToComa(total);
    this.inputValueMemo = total;
    inputScreen.value = "";
    inputScreen.placeholder = total;
}

function transformComaToPoint(value) {
    if(typeof value !== "number"){
        let resultTransform = value.replace(',' , '.');
        return parseFloat(resultTransform);
    }
    return value;
}

function transforPointToComa(value){
    let resultTransform = value.toString();
     resultTransform = resultTransform.replace('.' , ',');
    return resultTransform;
}

const resetCalculator = () =>{
    const inputScreen = document.getElementsByClassName('calculator__screen')[0];
    inputScreen.value = 0;
    this.operator = null;
    this.inputValueMemo = 0;
}