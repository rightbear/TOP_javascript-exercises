const reverseString = function(original) {
    let splitArray = original.split("");
    let reverseArray = [];

    //反轉陣列也可用reverse()來做
    for (i=splitArray.length -1 ; i >= 0 ; i--){
        reverseArray.push(splitArray[i]);
    }
    //let reverseArray = splitArray.reverse();

    let reverseString = reverseArray.join('');
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
