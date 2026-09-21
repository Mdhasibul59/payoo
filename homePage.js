const addMoneyCard = document.getElementById('add-money-card');
const billingDescription = document.getElementById('billing-description');
const addMoneySection = document.getElementById('add-money-section');



addMoneyCard.addEventListener('click', function(){
    addMoneySection.classList.remove('hidden');
    billingDescription.classList.add('hidden');
})