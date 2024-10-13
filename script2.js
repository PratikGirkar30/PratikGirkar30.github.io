/**
 * Converts BCD to binary.
 * @param {string} bcd - The BCD representation as a string.
 * @returns {string} - The binary number as a string.
 */
function bcdToBinary(bcd) {
    if (bcd.length % 4 !== 0) {
        document.getElementById('convertedNumber').textContent = `Invalid BCD input`;
        throw new Error('Invalid BCD input.');
    }

    let decimalString = '';

    for (let i = 0; i < bcd.length; i += 4) {
        const bcdDigit = bcd.slice(i, i + 4);
        const decimalDigit = parseInt(bcdDigit, 2);
        if (isNaN(decimalDigit) || decimalDigit > 9) {
            document.getElementById('convertedNumber').textContent = `Invalid BCD input`;
            throw new Error('Invalid BCD digit.');
        }
        decimalString += decimalDigit;
    }

    // Convert decimal string to binary
    const decimal = parseInt(decimalString, 10);
    return decimal.toString(2);
}

function bcdtobin() {
    const bcdInput = document.getElementById('inputNumber').value;
    const binaryResult = bcdToBinary(bcdInput);
    document.getElementById('convertedNumber').textContent = `Binary Number: ${binaryResult}`;
}