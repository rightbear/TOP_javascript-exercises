// Use rest parameters to deal with multiple optional arguments (Nnunbers to be removed)

const removeFromArray = function(originalArray, ...removedNums) {
    let remainedArray = [];

    //這邊也可以用forEach來遍歷originalArray的所有元素
    for (const num of originalArray) {
        if (!removedNums.includes(num)){
            remainedArray.push(num);
        }
    }
    return remainedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
