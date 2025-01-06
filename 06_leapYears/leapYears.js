const leapYears = function(year) {
    // if year % 4 == 0 不確定是論年嗎?
    //      if year % 100 != 0 確定是論年
    //      if year % 100 == 0 不確定是論年?
    //          if year % 400 == 0 確定是論年
    //  (year % 100 == 0 ) && (year % 400 == 0)) 可省略成 (year % 400 == 0) ===> 公因數的性質
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
