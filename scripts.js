function convert() {
    const inputNumber = document.getElementById('inputNumber').value.trim().toUpperCase();
    const fromBase = parseInt(document.getElementById('fromBase').value, 10);
    const toBase = parseInt(document.getElementById('toBase').value, 10);

    // Check if base values are valid
    if (fromBase < 2 || fromBase > 36 || toBase < 2 || toBase > 36) {
        document.getElementById('convertedNumber').textContent = 'Base must be between 2 and 36.';
        return;
    }

    // Check if the input number is empty
    if (inputNumber === '') {
        document.getElementById('convertedNumber').textContent = 'Please enter a number.';
        return;
    }

    // Validate the input number for the given base
    const validChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let char of inputNumber) {
        if (validChars.indexOf(char) >= fromBase) {
            document.getElementById('convertedNumber').textContent = `Invalid character '${char}' for base ${fromBase}.`;
            return;
        }
    }

    let decimalNumber;

    try {
        // Convert from the input base to decimal
        decimalNumber = parseInt(inputNumber, fromBase);

        if (isNaN(decimalNumber)) {
            throw new Error('Invalid number for the selected base.');
        }

        let convertedNumber;

        // Convert from decimal to the target base
        switch (toBase) {
            case 2:
                convertedNumber = decimalNumber.toString(2);
                break;
            case 8:
                convertedNumber = decimalNumber.toString(8);
                break;
            case 16:
                convertedNumber = decimalNumber.toString(16).toUpperCase();
                break;
            case 10:
                convertedNumber = decimalNumber.toString(10);
                break;
            default:
                convertedNumber = 'Invalid target base';
        }

        document.getElementById('convertedNumber').textContent = `Converted Number: ${convertedNumber}`;
    } catch (error) {
        document.getElementById('convertedNumber').textContent = error.message;
    }
}
