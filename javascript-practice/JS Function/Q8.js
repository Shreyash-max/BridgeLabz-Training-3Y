
Array.prototype.myMap = function (callback) {
    const result = [];

    // Process every element of the array.
    for (let index = 0; index < this.length; index++) {
        // Match map() behavior by skipping empty slots.
        if (index in this) {
            result[index] = callback(
                this[index],
                index,
                this
            );
        }
    }

    return result;
};

// Test the custom method.
const numbers = [1, 2, 3];

const doubled = numbers.myMap(num => num * 2);
const squared = numbers.myMap(num => num * num);

console.log(doubled);
console.log(squared);
console.log(numbers); // Original array remains unchanged
