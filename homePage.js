// targeted card section 
const addMoneyCard = document.getElementById('add-money-card');
const cashOutCard = document.getElementById('cash-out-card');
const transferMoneyCard = document.getElementById('transfer-money-card');
const getBonusCard = document.getElementById('get-bonus-card');
const payBillCard = document.getElementById('pay-bill-card');
const transactionCard = document.getElementById('transaction-billing-card');




// targeted form section
const billingDescription = document.getElementById('billing-description');
const addMoneyForm = document.getElementById('add-money-form');
const cashOutForm = document.getElementById('cash-out-form');
const transferMoneyForm = document.getElementById('transfer-money-form');
const getBonusForm = document.getElementById('get-bonus-form');
const payBillForm = document.getElementById('pay-bill-form');



addMoneyCard.addEventListener('click', function(){
    addMoneyForm.classList.remove('hidden');
    billingDescription.classList.add('hidden');
    cashOutForm.classList.add('hidden');
    transferMoneyForm.classList.add('hidden')
    getBonusForm.classList.add('hidden');
    payBillForm.classList.add('hidden');
})
cashOutCard.addEventListener('click', function(){
    cashOutForm.classList.remove('hidden');
    billingDescription.classList.add('hidden');
    addMoneyForm.classList.add('hidden');
    transferMoneyForm.classList.add('hidden');
    getBonusForm.classList.add('hidden');
    payBillForm.classList.add('hidden');
})
transferMoneyCard.addEventListener('click', function(){
    transferMoneyForm.classList.remove('hidden')
    billingDescription.classList.add('hidden')
    addMoneyForm.classList.add('hidden');
    cashOutForm.classList.add('hidden');
    getBonusForm.classList.add('hidden');
    payBillForm.classList.add('hidden');
})
getBonusCard.addEventListener('click', function(){
    getBonusForm.classList.remove('hidden');
    billingDescription.classList.add('hidden')
    addMoneyForm.classList.add('hidden');
    transferMoneyForm.classList.add('hidden');
    cashOutForm.classList.add('hidden');
    payBillForm.classList.add('hidden');
})
payBillCard.addEventListener('click', function(){
    payBillForm.classList.remove('hidden');
    billingDescription.classList.add('hidden');
    getBonusForm.classList.add('hidden');
    addMoneyForm.classList.add('hidden');
    transferMoneyForm.classList.add('hidden');
    cashOutForm.classList.add('hidden');
})
transactionCard.addEventListener('click', () =>{
    billingDescription.classList.remove('hidden')
    getBonusForm.classList.add('hidden');
    addMoneyForm.classList.add('hidden');
    transferMoneyForm.classList.add('hidden');
    cashOutForm.classList.add('hidden');
    payBillForm.classList.add('hidden');
})