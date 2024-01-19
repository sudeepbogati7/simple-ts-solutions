// Given an array of integers,
// return indices of the two numbers such that they add up to a specific target

/*

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
*/



// some more 

const students = ["Sudeep", "Sunil ", "Swastika"];




