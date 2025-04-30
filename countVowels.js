function countVowels(str) {
    let vowels = `aeiouAEIOU`
    let i =0
    for(letter of str) {
        if (vowels.includes(letter)){
             i++;
        }
    }
    return i
};
   
module.exports = countVowels;

// str, want to check each value of string if it's a vowel for each vowel we want to have a counter that returns when done