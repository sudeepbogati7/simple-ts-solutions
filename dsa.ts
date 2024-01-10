// 1. Calculate the factorial of a given number : 

function factorialOf(n : number) : number{
    if (n === 0 || n === 1){
        return 1;
    }else{
        return n *factorialOf(n-1);
    }
}

console.log("Factorial of 5 is : ", factorialOf(5));


console.log("-------------------------------------------------------------------------------------------");

//2. Bubble Sort:
function bubbleSort(arr: number[]): number[]{
    const n = arr.length;

    for(let i= 0 ; i< n; i++){
        for (let j=0 ; j < n-i-1 ; j++) {
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
const numbers:number[] = [5,6,7,2,4,9,34,12,0,8];
console.log("sorted using bubble sort : ", bubbleSort(numbers));
console.log("-------------------------------------------------------------------------------------------");





// 3. Binary Search 

function binarySearch(arr: number[], target: number){
    const low = 0 ;
    const high = arr.length -1; 


    while(low <= high){
        const mid = Math.floor(low + high ) /2 ; 
        

    }
}