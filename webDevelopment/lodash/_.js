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
            const half = (length - len)/2;
            return padding.repeat(Math.floor(half)) + str + padding.repeat(Math.ceil(half));
        }
        return str;
    },

    // Checks if obj has the key property
    has(obj, key){
        return obj[key] === undefined ? false : true;
    },

    // Iterates through each key and value in obj and swaps them
    invert(obj){
        let invertedObj = {};
        for(key in obj){
            invertedObj[obj[key]] = key;
        }
        return invertedObj;
    },

    // Returns the key of the first element predicate returns truthy for
    findKey(obj, predicate){
        for(i in obj){
            let evalution = predicate(obj[i]);
            if(evalution == true) return i
        }
        return undefined;
    },
    
    // Creates a slice of array with n elements dropped from the beginning
    drop(arr, number){
        if(number === undefined){
            arr.shift();
            return arr;
        }
        return arr.slice(number);
    },

    // Creates a slice of array excluding elements dropped from the beginning.
    // Elements are dropped until predicate returns falsey. The predicate is
    // invoked with three arguments: (value, index, array)
    dropWhile(arr, predicate){
        let dropNumber = arr.findIndex((element, index) => {
            return !(predicate(element, index, arr));
        });
        return this.drop(arr, dropNumber);
    }

};

module.exports = _;