const fibonacci = function(num) {

    if (typeof num !== 'number') {
        num = parseInt(num);
    }

    if(num >= 0){
        let current = 0;
        let next = 1;
        for (let i = 1 ; i <= num ; i++){
            [current, next] = [next, current+next];
        }
        return current;
    }
    else{
        return "OOPS";
    } 
};

// Do not edit below this line
module.exports = fibonacci;
