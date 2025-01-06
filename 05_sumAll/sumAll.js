const sumAll = function(numStart, numEnd) {
    if (!Number.isInteger(numStart) || !Number.isInteger(numEnd) ||
        numStart <= 0 || numEnd <= 0){
            return 'ERROR';
    }
    else {
        let sum = 0;

        if(numStart < numEnd){
            for (let i=numStart ; i<=numEnd ; i++){
                sum += i;
            }
        }
        else{
            for (let i=numStart ; i>=numEnd ; i--){
                sum += i;
            }
        }

        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
