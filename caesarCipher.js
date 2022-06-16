function caesarCipher(str, shift) {
    let decipher = '';
    [...str].forEach(char => {
        if (isALetter(char)) {
            if (isUpperCase(char)) {
                decipher += getShiftedChar(char, 65, shift);
            } else {
                decipher += getShiftedChar(char, 97, shift);
            }
        } else {
            decipher += String.fromCharCode(char.charCodeAt(0));
        }
    });
    return decipher;
}

function getShiftedChar(char, asciiStartNumber, shift) {
    return String.fromCharCode((char.charCodeAt(0) + shift - asciiStartNumber) % 26 + asciiStartNumber); 
}

function isUpperCase(char) {
    return char === char.toUpperCase();
}

function isALetter(char) {
    return (/[a-zA-Z]/).test(char);
}

export { caesarCipher }