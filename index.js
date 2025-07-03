// generate password function
generatePassword = (length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) => {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_+=";

    // declare empty strings
    let allowedChars = "";
    let password = "";

    // concating strings
    if (includeLowercase === true)
    {
        allowedChars += lowercaseChars
    }
    else
    {
        allowedChars += "";
    }

    if (includeUppercase === true)
    {
        allowedChars += uppercaseChars
    }
    else
    {
        allowedChars += "";
    }

    if (includeNumbers === true)
    {
        allowedChars += numberChars;
    }
    else
    {
        allowedChars += "";
    }

    if (includeSymbols === true)
    {
        allowedChars += symbolChars;
    }
    else
    {
        allowedChars += "";
    }

    if (length <= 0)
    {
        return `Password length must be at least 1.`;
    }

    if (allowedChars.length === 0)
    {
        return `At least 1 of the options need to be selected.`
    }

    for (let i = 0; i < length; i++)
    {
        const randomIndex = Math.random() * allowedChars.length
    }

    console.log(allowedChars);

    return '';
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

// call function
const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Generated password: ${password}`);
