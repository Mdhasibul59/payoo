// logon botton function.

document.getElementById('loginBtn').addEventListener('click', (event)=>{
    event.preventDefault();
    const mobileNumber = 17233578820;
    const pinNumber = 388221;

    const mobileNumberValue = parseInt(document.getElementById('mobile-number').value);
    const pinNumberValue = parseInt(document.getElementById('pin-number').value);

    if(mobileNumberValue === mobileNumber && pinNumberValue === pinNumber){
        window.location.href = "homePage.html"   
    }
    else{
        alert('Input validation error')
    }
    
})