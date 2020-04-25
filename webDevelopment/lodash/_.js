let _ = {
    // Takes three arguments and if number is already between the upper 
    // and lower bound, returns number. If number is smaller then the
    // lower bound it will  return the lower bound and if number is greater
    // than the upperBound the method will return the upperBound.
    clamp(number, lowerBound, upperBound){
        let clampedValue = Math.max(number, lowerBound);
        clampedValue = Math.min(clampedValue, upperBound);
        return clampedValue;
    }


};




// Do not write or modify code below this line.
module.exports = _;