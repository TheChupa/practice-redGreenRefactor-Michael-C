const countVowels = require(`../countVowels.js`);



describe("The Vowel Counter should", () => {

    test("return 0 for strings with no vowels", () => {
    expect(countVowels("bzzzzzzzzz")).toBe(0);
    });

    test("return count of 2 for string with 2 vowels", () => {
    expect(countVowels("Hello")).toBe(2);
    });
    // y is not a vowel dumm`y`
    test("return count of 0 if string contains the `vowel` y ", () => {
    expect(countVowels("fly")).toBe(0);
    });

    test("return count of 0 if string is empty", () => {
    expect(countVowels("")).toBe(0);
    });
    test("return count of 0 if string is only spaces", () => {
    expect(countVowels("               ")).toBe(0)
    });
});

