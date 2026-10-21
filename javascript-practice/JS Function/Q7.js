
function makeMultiplier(multiplier) {
    // The returned function remembers 'multiplier'.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5));  // 15
console.log(double(5));  // 10
console.log(triple(10)); // 30
