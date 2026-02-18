document.getElementById('login-btn').addEventListener('click', function() {
    // Get the mobile number
    const inputMobileNumber = document.getElementById('mobile-number');
    const mobileNumber = inputMobileNumber.value;
    
    // Get the PIN
    const inputPin = document.getElementById('pin');
    const pin = inputPin.value;
    
    // Match the mobile number & pin
    if(mobileNumber === '01518458075' && pin === '1234'){
        alert('Successfully login');
        window.location.assign('/home.html');
    } else {
        alert('Opps! login failed');
        return;
    }
});