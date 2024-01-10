// Closure function :

/*you have a function inside another function. The inner function can access not only its own variables but also the variables of the outer function. Even if the outer function has finished running, the inner function still remembers and has access to the variables from the outer function.*/


function outerFunc(){
    const outerVar = "this is an outer variable "

    function innerFunc(){
        console.log(outerVar);
    }

    return innerFunc;
}

const callingOuterFunc = outerFunc();

 callingOuterFunc();