function hasSpaces(input) {
    return input.includes(' '); // Returns true if there's a space
}
function bcdToDec(bcdInput) {

    // Check if the input is valid
    if (!isValidBCD(bcdInput)) {
        document.getElementById('convertedNumber').textContent = `Invalid BCD Number`;
        return;
    }

    // Convert BCD to Decimal
    const decimalValue = bcdToDecimal(bcdInput);
    //document.getElementById('convertedNumber').textContent = `Decimal Value: ${decimalValue}`;
    return decimalValue;
}

// Function to check if input is valid BCD
function isValidBCD(input) {
    const bcdArray = input.split(' ');
    return bcdArray.every(bcd => /^[01]{4}$/.test(bcd)); // Each BCD must be a 4-bit binary
}

// Function to convert BCD string to decimal
function bcdToDecimal(input) {
    return input.split(' ').reduce((decimal, bcd) => {
        return decimal * 10 + parseInt(bcd, 2);
    }, 0);
}

function bcdtodec() {
    const bcdInput = document.getElementById('inputNumber').value;
    if (!hasSpaces(bcdInput)) {
        document.getElementById('convertedNumber').textContent = `Please Enter Space between 2 BCD Numbers`;
    }
    else {
        const decimalResult = bcdToDec(bcdInput);
        document.getElementById('convertedNumber').textContent = `Decimal: ${decimalResult}`;
    }
}