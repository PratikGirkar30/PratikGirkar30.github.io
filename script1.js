/**
 * Converts binary number to BCD.
 * @param {string} binary - The binary number as a string.
 * @returns {string} - The BCD representation as a string.*/
function isBinary(input) {
    // Regular expression to check for binary digits (0 and 1)
    const binaryRegex = /^[01]+$/;
    return binaryRegex.test(input);
}
function binaryToBCD(binaryStr) {
    // Convert binary string to decimal
    const decimal = parseInt(binaryStr, 2);

    // Convert decimal to BCD
    let bcd = '';
    const decimalDigits = decimal.toString().split('');

    for (const digit of decimalDigits) {
        // Convert each digit to its BCD representation
        bcd += parseInt(digit, 10).toString(2).padStart(4, '0');
    }

    return bcd;
}
function bintobcd() {
    const binary = document.getElementById('inputNumber').value;
    const binarycheck = isBinary(binary);
    if (binarycheck === false) {
        document.getElementById('convertedNumber').textContent = `Invalid Binary Number`;
    }
    else {
        const bcd = binaryToBCD(binary);
        document.getElementById('convertedNumber').textContent = `BCD Number: ${bcd}`;
    }
}