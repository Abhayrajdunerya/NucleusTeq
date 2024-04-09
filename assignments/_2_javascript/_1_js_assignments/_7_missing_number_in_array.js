const missingNumInArr = (arr, N) => {
    let arrSum = 0;
    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }

    const sumN = (N*(N+1))/2;

    return sumN-arrSum;

}

const arr = [1,2,3,5];
const N = 5;
console.log(missingNumInArr(arr, N));