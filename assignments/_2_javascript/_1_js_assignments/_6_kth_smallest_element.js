const kthSmallestElement = (arr, k) => {
    arr.sort((a, b) => a-b);

    if (k > arr.length || k < 1) {
        return null;
    }

    return arr[k-1];
}

const arr = [7,10,4,3,20,15];
const k = 3

console.log(kthSmallestElement(arr, k));