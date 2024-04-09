const checkPrime = (num) => {
    if (num <= 1) {
        console.log(`${num} is not a prime number`);
        return false
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(`${num} is not a prime number`);
            return false;
        }
    }

    console.log(`${num} is a prime number`);
    return true;
}

checkPrime(17);
checkPrime(15);