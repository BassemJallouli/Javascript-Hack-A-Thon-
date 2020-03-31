function toArray(obj) { // covert object to arrays
    return Object.entries(obj); // Object.entries() method returns an array 
    // of a given object's own enumerable string-keyed property [key, value] pairs
}

const obj1 = { // define 4 inputs 
    a: 'Max',
    b: 27,
    c: 'Sonia',
    d: 24
};

console.log(toArray(obj1)); // display the array 

