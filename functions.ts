// ================================================================================================
// Q. Given two strings, return true if they are anagrams of one another, 
// ================================================================================================

const firstWord : string = "Deep";
const secondWord : string = 'Sudeep';


function isAnagram(first: string, second: string){
    let a  = first.toLowerCase();
    let b = second.toLowerCase();

    // sort the strings and join , 
    a  = a.split("").sort().join("");
    b  = b.split("").sort().join("");

    return a === b ;
}
console.log(isAnagram(firstWord, secondWord));


// ================================================================================================
// Q. Use a closure to create a private counter 
// ================================================================================================


function counter () : Record<string , Function> {
    let _counter : number = 0; 

    // returning an object with several functions what allows us to modify the private _counter variable 
    return {
        add : function(inc: number) {
            _counter += inc;
        },
        retrieve : function(){ return "The counter is currently at : "+_counter}
    }
}


let c = counter();

c.add(5);
c.add(13);

console.log(c.retrieve()); //The counter is currently at : 18
;

// ================================================================================================
// Write a function that finds the longest word in a sentence.
// ================================================================================================

const sentence: string = "Hi , my name is Sudeep Bogati. I am from Kathmandu.";

function findLongestWord(sentence : string){
    const words  = sentence.split(" ");
    let longestWord : string = '';

    for(let i =0; i< words.length ; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }
    return longestWord;    
}
console.log( "The longest word in --> %s <--is : ",sentence,findLongestWord(sentence));


