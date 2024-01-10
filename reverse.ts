// check if the given string is palindrome or not
const anyString = 'madam';

function isPalindrome(anyString: string) : boolean  {
    const cleanStr = anyString.toLowerCase();
    const reversedString = cleanStr.split('').reverse().join('');

    return cleanStr === reversedString;
}
console.log(`Is the string : ${anyString} palindrome ? `)
console.log(`Answer => ${isPalindrome(anyString)}`);




// Given a string, reverse each word in a sentence
var hi = "Hello this is Sudeep.";

const reverseEntireSentence = reverseBySeparator(hi, ""); // .peeduS si siht olleH
const reverseEachWord = reverseBySeparator(reverseEntireSentence, " ") //olleH siht si .peeduS

function reverseBySeparator(myString: string, separator: string){
    return myString.split(separator).reverse().join(separator);
}

console.log(reverseEachWord);


