function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

// Test the function
console.log(reverseArray([1, 2, 3])); // Output: [3, 2, 1]
