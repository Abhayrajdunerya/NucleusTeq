const arrayIntersection = (arr1, arr2) => {
    const intersection = [];
    arr1.sort();
    arr2.sort();

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            intersection.push(arr1[i]);
            i++;
            j++
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return intersection;
}

const arr1 = [1,2,3,4,5];
const arr2 = [3,4,5,6,7];

console.log(arrayIntersection(arr1, arr2));
