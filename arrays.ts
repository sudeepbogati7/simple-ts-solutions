// Given an array of integers,
// return indices of the two numbers such that they add up to a specific target

function twoSum(nums: number[], target: number): number[] | null {
    const numMap: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i];
        }

        numMap.set(nums[i], i);
    }

    return null;
}

const nums = [2, 7,3,5, 11,12,13,15,56,12,14,18,89, 15];
const target = 9;
const result = twoSum(nums, target);

if (result !== null) {
    const [index1, index2] = result;
    console.log(`Indices of the two numbers: ${index1}, ${index2}`);
} else {
    console.log("No solution found.");

}

//----------------------------------------------------------------------------------------------------------------
//---------- duplicate elements of an array -----------------------------------------
//----------------------------------------------------------------------------------------------------------------

function duplicate(arr : number[]) : number[]{
    return arr.concat(arr);
}

console.log(duplicate([1,2,3,4]));


// ================================================================================================
// Q. Write a function that removes duplicates from an array.
// ================================================================================================

function removeDuplicates(arr : number[]){
    return [ ... new Set(arr)];
}
console.log("Removed duplicate elements successfully :",removeDuplicates([1,2,2,3,4,1,2,4,5,1,3,4,5,1,3,4]));



// ====================================================================================================
// Q.Given an array containing numbers from 1 to N, with one number missing, find the missing number.
// ====================================================================================================

const arr : number[] = [1,2,3,4,6];

function findMissingNum(arr : number[]){
    const n = arr.length + 1 ;
    const sum = (n * (n+1) ) / 2; 

    const arrSum = arr.reduce((a, c) => a + c , 0);

    return sum - arrSum;
}

console.log("The missing number is : ",findMissingNum(arr));
;