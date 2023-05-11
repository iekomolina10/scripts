console.log("Welcome to Web700") //print message
// to run the script in terminal type "node + filename"

//declaring variables
var a = 100
console.log(a)

a = "Hello"
console.log(a)
console.log(typeof(a)) //get the type of value, dynamic type is unique to java script, declared at global scope

let b = 1000 //declaring the variable in a block/module scope only
console.log(b)

b = "Hello World"
console.log(b)

const x = 500 // cannot change the value of the variable not the type
console.log(x)

//x = "hello world"
//console.log(x)

//In Java Script objects can be declared even without classes using object literal
student = {
    sid: 1, //sid is key and in json it is ""
    fnm: "Iekow",
    lastname: "Molina",
    result: "Pass"
}
console.log(student)
console.log(typeof(student))
console.log(student.sid) //get the value using the key
//Class can help identify the type of the object, empose rules and guidelines
//when variable doesnt have a value it will be undefined

var z;
console.log(z)

//Addition
var z = 10 + 20
console.log(z)

//Concatinating String
var z = '10' + '20'
console.log(z)
var name = "GLOBAL"
let other_name = "GLOBAL LET"
//declaring function, in this function the value outside the function
function sayHello() {
    name = "GLOBAL IN"
    let other_name = "GLOBAL LET IN"
    console.log("Hello,Ieko - " + name)
    console.log("Hello,Ieko - " + other_name)
}

sayHello()
console.log(typeof(sayHello))
console.log(name)
console.log(other_name)
//declaring function within a variable
//var hello = function(){
//    console.log("Hello World!!!")
//}

//hello()

let hello = function(name){
    console.log(`Hello, ${name}`)
}

hello('IekoL')