//High order functions examples

function sayHello(){
    return "Hello word";
}

//Asigning a function to a variable
let fn = sayHello;

console.log(fn());

//------------------------------------------

//Passing a function as a reference
function greet(fnMessage){
    console.log(fnMessage());
}

greet(sayHello);

//-----------------------------------------

function sayHello2(){
    return function(){
        return "Hello world 2";
    }
}

let fn2 = sayHello2();
let message = fn2();