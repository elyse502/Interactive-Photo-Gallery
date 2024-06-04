#!/home/elysee_niyibizi/.nvm/versions/node/v22.0.0/bin/node

/**
 * Transforms a given string based on specific rules.
 *
 * @param {string} str - The input string to be transformed.
 * @returns {string} - The transformed string.
 */
function transformString(str) {
    let length = str.length;
    let reversedStr = str.split('').reverse().join('');
    let asciiStr = str.split('').map(char => char.charCodeAt(0)).join(' ');

    if (length % 3 === 0 && length % 5 === 0) {
        return asciiStr.split('').reverse().join('');
    } else if (length % 3 === 0) {
        return reversedStr;
    } else if (length % 5 === 0) {
        return asciiStr;
    } else {
        return str;
    }
}

/**
 * Entry point of the script.
 */
function main() {
    const inputString = "Hello Worlddddd";
    console.log(inputString.length);
    const transformedString = transformString(inputString);
    console.log(transformedString);
}

main();