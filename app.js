
//event handler for caculator was left inline on index page. 
// It did not work when not inline
const buttons = document.querySelectorAll('input[type="button"]')
const customTip = document.querySelector('#customPercent')
const tipAmountPer = document.querySelector('.result__amount-tip')
const resultTotalPer = document.querySelector('.result__total-amount')
const numberOfPeeps = document.querySelector('.calculator__people')
const reset = document.querySelector('input[type="reset"]')
let percent = '';

buttons.forEach((button)=> {
  button.addEventListener('click', (e)=> {
    percent = '';
    percent = (e.target.value);
    calculate()
    })
  })
  customTip.oninput = function () {
    percent = customTip.value
  }
  
  reset.onclick = function () {
    tipAmountPer.textContent = `$0.00`;
    resultTotalPer.textContent = `$0.00`;
  }
 
  function calculate() {
    const percentNum=parseInt(percent);
    const billTotal = document.getElementById("billTotal").value;
    const numberPeople = document.getElementById("numberPeople").value
    if (numberPeople==0) {
      tipAmountPer.textContent = `$0.00`
      resultTotalPer.textContent = `$0.00`
      numberOfPeeps.classList.add('warning');
    } else if (percent=='') {
      tipAmountPer.textContent = `$0.00`
      resultTotalPer.textContent = `$0.00`
    } else {
    numberOfPeeps.classList.remove('warning');
    const tipAmount = ((billTotal * (percentNum/100))/numberPeople);
    const total = ((billTotal/numberPeople)+tipAmount);
     tipAmountPer.textContent = `$${tipAmount.toFixed(2)}`
     resultTotalPer.textContent = `$${total.toFixed(2)}`}
    console.log({percent})
    }


