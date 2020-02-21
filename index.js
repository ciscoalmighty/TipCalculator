function increaseValuePercent() {
    var value = parseInt(document.getElementById('percentNumber').value, 10);
    value = isNaN(value) ? 0 : value;
    value+=5;
    document.getElementById('percentNumber').value = value +"%";
    calculateBill();
  }
  
  function decreaseValuePercent() {
    var value = parseInt(document.getElementById('percentNumber').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value-=5;
    document.getElementById('percentNumber').value = value + "%";
    calculateBill();
  }
  function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    calculateBill();
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
    calculateBill();
  }
   
  function tipPerPerson(){
    let tipPercent = parseInt(document.getElementById('percentNumber').value);
    let table = parseInt(document.getElementById('number').value);
    let totalBill = parseInt(document.getElementById('totalbill').value);
    let value = (totalBill * (tipPercent/100))/table;
    document.getElementById('tipPerPerson').innerHTML = "$"+ value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');   
   }

   function totalPerPerson(){
    let tipPercent = parseInt(document.getElementById('percentNumber').value);
    let table = parseInt(document.getElementById('number').value);
    let totalBill = parseInt(document.getElementById('totalbill').value);
    let value =  ((totalBill * (tipPercent/100)) + totalBill)/table;
    document.getElementById('totalPerPerson').innerHTML = "$"+ value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
   }

   function totalBill(){
    let tipPercent = parseInt(document.getElementById('percentNumber').value);
    let totalBill = parseInt(document.getElementById('totalbill').value);
    let value =  (totalBill * (tipPercent/100)) + totalBill;
    document.getElementById('fullAmount').innerHTML = "$"+ value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
   }

function calculateBill(){
    tipPerPerson();
    totalPerPerson();
    totalBill();
}
