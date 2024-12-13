function submitForm() {
    const form = document.getElementById('detailsForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    if (form.checkValidity()) {
        thankYouMessage.classList.remove('hidden'); 
    } else {
        form.reportValidity(); 
    }
}



function displayThankYouMessage() {
    const form = document.getElementById('deliveryForm');
    const confirmationMessage = document.getElementById('confirmationMessage');


    if (form.checkValidity()) {
        confirmationMessage.classList.remove('message-hidden'); 
    } else {
        form.reportValidity(); 
    }
}



function displayThankYouMessage() {
    const form = document.getElementById('deliveryForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

 
    if (form.checkValidity()) {
        confirmationMessage.classList.remove('message-hidden'); 
    } else {
        form.reportValidity(); 
    }
}


function submitPaymentForm() {
    const form = document.getElementById('paymentForm');
    const supportMessage = document.getElementById('supportMessage');

 
    if (form.checkValidity()) {
        supportMessage.classList.remove('hidden'); 
    } else {
        form.reportValidity(); 
    }
}






function buyNow() {

    const forms = [
        document.getElementById('detailsForm'),
        document.getElementById('deliveryForm'),
        document.getElementById('paymentForm')
    ];

    for (let form of forms) {
        if (!form.checkValidity()) {
            form.reportValidity(); 
            return; 
        }
    }

    const deliveryDate = document.getElementById('preferred-date').value;

    alert(`Your purchased items will arrive on ${deliveryDate}. Thank you for your support!`);
    cart = []; 
    updateCart(); 
}



