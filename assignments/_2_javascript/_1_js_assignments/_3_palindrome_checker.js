const checkPalindrome = (str) => {
    for (let i = 0; i < str.length/2; i++) {
        if (str[i] !== str[str.length-i-1]) {
            console.log(str, "is not a palindrome");
            return false;
        }
    }

    console.log(str, "is a palindrome");
}

checkPalindrome("Abhay")
checkPalindrome("Naman")
checkPalindrome("naman")