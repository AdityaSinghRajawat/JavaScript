let recursiveBinarySearch = (arr, low, high, key) => {
    if (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === key) {
            return mid;

        } else if (arr[mid] < key) {
            return recursiveBinarySearch(arr, mid + 1, high, key);

        } else {
            return recursiveBinarySearch(arr, low, mid - 1, key);
        }
    }
    return -1;
}

let arr = [32, 42, 56, 64, 128];
let key = 32;
let result = recursiveBinarySearch(arr, 0, arr.length - 1, key);
console.log(result);