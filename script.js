
// first class ticket count 
document.getElementById('first-plus-button').addEventListener('click', function firstClassSitCount() {
    const firstClassInput = document.getElementById('first-class-input');
    const firstInput = parseInt(firstClassInput.value);
    firstClassInput.value = firstInput + 1;

    totalCalculator()
})

document.getElementById('first-minus-button').addEventListener('click', function () {
    const firstClassInput = document.getElementById('first-class-input');
    const firstInput = parseInt(firstClassInput.value);
    firstClassInput.value = firstInput - 1;

    if (firstClassInput.value <= 0) {
        firstClassInput.value = 0;
    }
    totalCalculator()
})


// economy ticket count
document.getElementById('economy-plus-button').addEventListener('click', function firstClassSitCount() {
    const economyClassInput = document.getElementById('economy-class-input');
    const economyInput = parseInt(economyClassInput.value);
    economyClassInput.value = economyInput + 1;
    totalCalculator()
})

document.getElementById('economy-minus-button').addEventListener('click', function () {
    const economyClassInput = document.getElementById('economy-class-input');
    const economyInput = parseInt(economyClassInput.value);
    economyClassInput.value = economyInput - 1;

    if (economyClassInput.value <= 0) {
        economyClassInput.value = 0;
    }
    totalCalculator()
})


// first and economy class ticket sub-total, vat, total price
function totalCalculator() {
    const firstClassInput = document.getElementById('first-class-input');
    const firstInput = parseInt(firstClassInput.value);
    const economyClassInput = document.getElementById('economy-class-input');
    const economyInput = parseInt(economyClassInput.value);

    const subTotal = firstInput * 150 + economyInput * 100;
    const totalTax = Math.round(subTotal * 0.1);
    const totalAmount = subTotal + totalTax;

    document.getElementById('sub-total').innerText = '$' + subTotal;
    document.getElementById('vat').innerText = '$' + totalTax;
    document.getElementById('total').innerText = '$' + totalAmount;
}


//alert massage or total booking confirm massage
document.getElementById('booking-button').addEventListener('click', function () {
    const firstClassInput = document.getElementById('first-class-input');
    const firstInput = parseInt(firstClassInput.value);
    const economyClassInput = document.getElementById('economy-class-input');
    const economyInput = parseInt(economyClassInput.value);
    const totalBill = document.getElementById('total').innerText;
    const totalTicket = economyInput + firstInput;
    alert('your total booking tecket : ' + totalTicket + '   first class ticket : ' + firstInput + '  econmony class : ' + economyInput + '  your total bill (VAT added) : ' + totalBill);
})