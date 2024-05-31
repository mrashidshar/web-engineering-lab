// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
var fruits = ["mango", "banana", "apple"];
console.log(fruits)

fruits.push("orang")
console.log("push function=  ",fruits)

fruits.pop()
console.log("pop function =  ",fruits)

fruits.shift()
console.log("shift functi =  ",fruits)

fruits.unshift("mango")
fruits.unshift("anaar")
console.log("unshift funct=  ",fruits)

var fruits2=["grapes","banana"]
var fruitss=fruits.concat(fruits2)
console.log("concate funct=  ",fruitss)

var index= fruitss.indexOf("banana")
console.log(index)

var lastindex= fruitss.lastIndexOf("banana")
console.log(lastindex)


function greet(name){
    return 'hello, '+name;
};
var greeting= greet("khuraim")
console.log(greeting)
console.log(greet("khuraim"))

const greet2 = (name) => {
return 'Hello, ' + name + '!';
};
console.log(greet2("khuraim"))

const greet3 = function(name) {
return 'Hello, ' + name + '!';
};
console.log(greet3("khuraim"))

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
return num * 2;
});
console.log(doubled)


const arr=[1,2,3,4,5]
const doubleArr=[]
const result= double(arr)
function double(array){
    
   array.forEach(function(num){
       var dbl= num*2
       doubleArr.push(dbl)
   });
   
    return doubleArr ;
}
console.log(result)

items = [1,2,3,4,5]
items.forEach(element => {
    console.log(element)
});
doubleArr.forEach(function(num){
    console.log(num*num)
})