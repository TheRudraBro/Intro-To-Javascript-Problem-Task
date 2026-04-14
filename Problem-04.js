var a = isNaN('11');
console.log(a);

var a = isNaN(2-10);
console.log(a);

// Both are false because '11' is a string that can be converted to a number, 
// and 2-10 is a valid mathematical expression that results in -8, which is a number.