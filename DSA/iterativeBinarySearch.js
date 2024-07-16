let iterativeBinarySearch = (arr, key) => {

    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);

        if (arr[mid] === key) {
            return mid;

        } else if (arr[mid] < key) {
            low = mid + 1;

        } else {
            high = mid - 1;
        }
    }
    return -1;
}

let arr = [32, 42, 56, 64, 128];
let key = 64;
let result = iterativeBinarySearch(arr, key);
console.log(result);





