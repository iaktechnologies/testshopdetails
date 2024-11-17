document.getElementById('shopForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const state = document.getElementById('state').value;
    const pincode = document.getElementById('pincode').value;
    const area = document.getElementById('area').value;
    const type = document.getElementById('type').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;

    // Set the data in popup
    document.getElementById('popupName').textContent = name;
    document.getElementById('popupState').textContent = state;
    document.getElementById('popupPincode').textContent = pincode;
    document.getElementById('popupArea').textContent = area;
    document.getElementById('popupType').textContent = type;
    document.getElementById('popupCity').textContent = city;
    document.getElementById('popupAddress').textContent = address;
    document.getElementById('popupEmail').textContent = email;

    // Show the popup
    document.getElementById('popupModal').style.display = 'flex';
});

document.getElementById('editBtn').addEventListener('click', function () {
    // Hide the popup and allow editing
    document.getElementById('popupModal').style.display = 'none';
    window.scrollTo(0, 0);
});

document.getElementById('updateBtn').addEventListener('click', function () {
    alert('Details Updated');
    document.getElementById('popupModal').style.display = 'none';
});
// Temporary array to store mobile numbers
const mobileNumbers = [];

// Add event listener for "Check" button
document.getElementById('checkMobile').addEventListener('click', function () {
    const mobileField = document.getElementById('mobile');
    const mobileError = document.getElementById('mobileError');
    const mobile = mobileField.value.trim();

    // Check if mobile number already exists
    if (mobileNumbers.includes(mobile)) {
        mobileField.classList.add('invalid');
        mobileField.classList.remove('valid');
        mobileError.textContent = 'Duplicate mobile number found!';
        mobileError.style.display = 'inline';
    } else {
        mobileField.classList.add('valid');
        mobileField.classList.remove('invalid');
        mobileError.textContent = '';
        mobileError.style.display = 'none';
    }
});

// Form submission handling
document.getElementById('shopForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const state = document.getElementById('state').value;
    const pincode = document.getElementById('pincode').value;
    const area = document.getElementById('area').value;
    const type = document.getElementById('type').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Check for valid mobile number before submission
    if (mobileNumbers.includes(mobile)) {
        alert('Duplicate mobile number. Please use a unique number.');
        return;
    }

    // Add mobile number to the array
    mobileNumbers.push(mobile);

    // Set the data in popup
    document.getElementById('popupName').textContent = name;
    document.getElementById('popupState').textContent = state;
    document.getElementById('popupPincode').textContent = pincode;
    document.getElementById('popupArea').textContent = area;
    document.getElementById('popupType').textContent = type;
    document.getElementById('popupCity').textContent = city;
    document.getElementById('popupAddress').textContent = address;
    document.getElementById('popupEmail').textContent = email;

    // Show the popup
    document.getElementById('popupModal').style.display = 'flex';
});

// Update button functionality
document.getElementById('updateBtn').addEventListener('click', function () {
    alert('Details Updated');
    document.getElementById('popupModal').style.display = 'none';
});
