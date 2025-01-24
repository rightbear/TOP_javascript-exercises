const findTheOldest = function(people) {
    return people
    .map(person => {
        if (!person.yearOfDeath){
            person.yearOfDeath = new Date().getFullYear();
        }
        return person;
    })
    .reduce((theoldest, curret) => {
        if ((theoldest.yearOfDeath - theoldest.yearOfBirth) < (curret.yearOfDeath - curret.yearOfBirth)){
            theoldest = curret;
        }
        return theoldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
