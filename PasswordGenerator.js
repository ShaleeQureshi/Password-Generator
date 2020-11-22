// User inputs
let length = 8;
let isLowerCase = true;
let isUpperCase = true;
let isNumber = true;
let isSpecialCharacter = true;

// Creating Password
let characterType;
let passwordCharacter;
let password = "";
let passwordCharCheck;

// Scanning for if character exists
let lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
let upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialCharacters = "!\"#$%&'()*+,-./";

// Keeping track of numbers of characters
let numberOfLowerCase = 0;
let numberOfUpperCase = 0;
let numberOfNumbers = 0;
let numberOfSpecialCharacters = 0;

document.getElementById("btnLowerCase").addEventListener("click", function(e) {
    if (isLowerCase) {
        isLowerCase = false;
    } else {
        isLowerCase = true;
    }
});

document.getElementById("btnUpperCase").addEventListener("click", function(e) {
    if (isUpperCase) {
        isUpperCase = false;
    } else {
        isUpperCase = true;
    }
});

document.getElementById("btnNumbers").addEventListener("click", function(e) {
    if (isNumber) {
        isNumber = false;
    } else {
        isNumber = true;
    }
});

document
    .getElementById("btnSpecialCharacters")
    .addEventListener("click", function(e) {
        if (isSpecialCharacter) {
            isSpecialCharacter = false;
        } else {
            isSpecialCharacter = true;
        }
    });

document.getElementById("btnGenerate").addEventListener("click", function(e) {
    e.preventDefault();
    if (
        isLowerCase === false &&
        isUpperCase === false &&
        isNumber === false &&
        isSpecialCharacter === false
    ) {
        alert("Not all options can be false! Ensure at least 1 is true!");
    } else {
        length = document.getElementById("length").value;
        console.log(length);
        document.getElementById("password").value = getPassword();
    }
});

// Main Method
function getPassword() {
    while (
        numberOfLowerCase == 0 ||
        numberOfUpperCase == 0 ||
        numberOfNumbers == 0 ||
        numberOfSpecialCharacters == 0
    ) {
        generatePassword();
        passwordCheck();
    }
    return password;
}

// Functions

function generateChar() {
    do {
        characterType = 1 + Math.floor(Math.random() * 4);

        if (characterType == 1 && isLowerCase == true) {
            passwordCharacter = String.fromCharCode(
                97 + Math.floor(Math.random() * 26)
            );
        }

        if (characterType == 2 && isUpperCase == true) {
            passwordCharacter = String.fromCharCode(
                65 + Math.floor(Math.random() * 26)
            );
        }

        if (characterType == 3 && isNumber == true) {
            passwordCharacter = String.fromCharCode(
                48 + Math.floor(Math.random() * 10)
            );
        }

        if (characterType == 4 && isSpecialCharacter == true) {
            passwordCharacter = String.fromCharCode(
                33 + Math.floor(Math.random() * 15)
            );
        }
    } while (passwordCharacter == undefined);
}

function generatePassword() {
    for (let i = 0; i < length; i++) {
        generateChar();

        while (passwordCharacter == password.charAt(i - 1)) {
            generateChar();
        }

        password += passwordCharacter;
    }
}

function passwordCheck() {
    numberOfLowerCase = 0;
    numberOfUpperCase = 0;
    numberOfNumbers = 0;
    numberOfSpecialCharacters = 0;

    for (let i = 0; i < length; i++) {
        if (
            lowerCaseAlphabet.indexOf(password.charAt(i)) >= 0 &&
            isLowerCase == true
        ) {
            numberOfLowerCase++;
        } else {
            numberOfLowerCase = 1;
        }

        if (
            upperCaseAlphabet.indexOf(password.charAt(i)) >= 0 &&
            isUpperCase == true
        ) {
            numberOfUpperCase++;
        } else {
            numberOfUpperCase = 1;
        }

        if (numbers.indexOf(password.charAt(i) && isNumber == true) >= 0) {
            numberOfNumbers++;
        } else {
            numberOfNumbers = 1;
        }

        if (
            specialCharacters.indexOf(
                password.charAt(i) && isSpecialCharacter == true
            ) >= 0
        ) {
            numberOfSpecialCharacters++;
        } else {
            numberOfSpecialCharacters = 1;
        }
    }
}