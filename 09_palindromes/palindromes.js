const palindromes = function (str) {
    //solution 1
    /*
    let isAlphabetic = Array.from(str).filter(char => {
        let code = char.charCodeAt(0);
        return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
    });
    
    let allLowerCase = isAlphabetic.map(char => char.toLowerCase());
    
    let start = 0, end = allLowerCase.length - 1;
    while(start < end){
        if(allLowerCase[start] == allLowerCase[end]){
            start++;
            end--;
        }
        else{
            return false;
        }
    }
    return true;
    */
    //solution2
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // make original string only includes characters in alphanumerical and become filterString
    const filterString = str
        .toLowerCase()
        .split('')
        .filter(item => alphanumerical.includes(item))
        .join('');

    // reverse characters in filterString and become reverseString
    const reverseString = filterString.split('').reverse().join('');

    // compare filterString and reverseString
    if(filterString == reverseString){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
