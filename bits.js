/**
 * Function to find the common elements in two arrays.
 *
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} An array containing the common elements.
 */
function findCommonElements(arr1, arr2) {
    const commonElements = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            commonElements.push(arr1[i]);
        }
    }

    return commonElements;
}

/**
 * Function to generate a random array of a given size.
 *
 * @param {number} size - The size of the array.
 * @returns {Array} A random array of the given size.
 */
function generateRandomArray(size) {
    const randomArray = [];

    for (let i = 0; i < size; i++) {
        randomArray.push(Math.floor(Math.random() * 100));
    }

    return randomArray;
}

/**
 * Function to test the findCommonElements function with large arrays.
 */
function testFindCommonElementsLarge() {
    const arr1 = generateRandomArray(10000);
    const arr2 = generateRandomArray(10000);

    console.log("Testing findCommonElements with large arrays...");
    console.time("findCommonElements");
    const commonElements = findCommonElements(arr1, arr2);
    console.timeEnd("findCommonElements");

    console.log(`Found ${commonElements.length} common elements.`);
}

// Example usage
testFindCommonElementsLarge();

/**
 * Function to find the common elements in two arrays.
 *
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} An array containing the common elements.
 */
function findCommonElements(arr1, arr2) {
    const commonElements = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            commonElements.push(arr1[i]);
        }
    }

    return commonElements;
}

/**
 * Function to generate a random array of a given size.
 *
 * @param {number} size - The size of the array.
 * @returns {Array} A random array of the given size.
 */
function generateRandomArray(size) {
    const randomArray = [];

    for (let i = 0; i < size; i++) {
        randomArray.push(Math.floor(Math.random() * 100));
    }

    return randomArray;
}

/**
 * Function to test the findCommonElements function with large arrays.
 */
function testFindCommonElementsLarge() {
    const arr1 = generateRandomArray(10000);
    const arr2 = generateRandomArray(10000);

    console.log("Testing findCommonElements with large arrays...");
    console.time("findCommonElements");
    const commonElements = findCommonElements(arr1, arr2);
    console.timeEnd("findCommonElements");

    console.log(`Found ${commonElements.length} common elements.`);
}

// Example usage
testFindCommonElementsLarge();
