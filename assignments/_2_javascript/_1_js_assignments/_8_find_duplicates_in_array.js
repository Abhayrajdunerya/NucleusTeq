const findDuplicates = (arr, N) => {
    const set = new Set()
    const duplicates = [];

    arr.forEach(ele => {
        if (set.has(ele)) {
            duplicates.push(ele);
        }
        set.add(ele);
    });

    if (duplicates.length == 0) {
        duplicates.push(-1);
    }
    
    return duplicates;
}

const arr = [2,3,1,2,3];
const N = 5;

console.log(findDuplicates(arr, N));