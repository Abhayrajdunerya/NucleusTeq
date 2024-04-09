const checkAnagram = (str1, str2) => {
    if (str1.length != str2.length) return false;

    const map1 = new Map();
    const map2 = new Map();

    for (const char of str1) {
        map1.set(char, (map1.get(char) || 0)+1)
    }

    for (const char of str2) {
        map2.set(char, (map2.get(char) || 0)+1)
    }

    for (const [key, value] of map1) {
        if (value !== map2.get(key)) {
            return false;
        }
    }

    return true
}

console.log(checkAnagram('listen', 'silent'));
console.log(checkAnagram('gulfl', 'gllfu'));
console.log(checkAnagram('hello', 'olelh'));
console.log(checkAnagram('hell', 'olelh'));
console.log(checkAnagram('helle', 'eelhh'));