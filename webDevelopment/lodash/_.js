let _ = {
    // Takes three arguments and if number is already between the upper 
    // and lower bound, returns number. If number is smaller then the
    // lower bound it will  return the lower bound and if number is greater
    // than the upperBound the method will return the upperBound.
    clamp(number, lowerBound, upperBound){
        let clampedValue = Math.max(number, lowerBound);
        clampedValue = Math.min(clampedValue, upperBound);
        return clampedValue;
    },

    // Checks to see if number is between the range start-end
    // Aceepts negative ranges
    inRange(number, start, end){
        if(end === undefined){
            end = start;
            start = 0;
        } else if(start > end){
            start += end;
            end = start - end;
            start = start - end;
        }

        if(number >= start && number < end ){
            return true;
        } else return false;
    },

    // Split string into an array of its words
    words(str){
        return str.split(' ');
    }


};




// Do not write or modify code below this line.
module.exports = _;