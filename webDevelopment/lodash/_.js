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
    // Default pattern used is a space(' ')
    words(str, pattern){
        pattern === undefined ? pattern = ' ' : pattern = pattern;
        return str.split(pattern);
    },

    // Pads string on the left and right sides if it's shorter than length. 
    // Padding characters are truncated if they can't be evenly divided by length.
    pad(str, length){
        let len = str.length;
        if(len<length){
            const padding = ' ';
            let half = (length - len)/2;
            return padding.repeat(Math.floor(half)) + str + padding.repeat(Math.ceil(half));
        }
        return str;
    }


};

module.exports = _;