// Math Operators
let number1 = 34
let number2 = 34
let result = number1 + number2
//console.log("number1 + number2 = " + result)
let friendsAge = [20, 19 ,22 ,33]
let sum =0
for (let i = 0; i<friendsAge.length;i++){
    sum += friendsAge[i]
}
let average = sum / friendsAge.length
//console.log(average)

// Increment And Decrement

let number = 5
number++
let decre = 6
decre--
// console.log(number)
// console.log(decre)

// Function

let tea = 5
let ma =5
let myAge = 23
function summing(a,b){
    return a+b

}

function makeConsoleLog(){
    console.log("this is fucntion to make console")
}

function addsToMyAge(incrementBy, multiplyBy){
    return (myAge + incrementBy) * multiplyBy
}

let myNewAge = addsToMyAge(summing(tea,ma), 2)


// console.log(myNewAge)
// console.log(summing(tea,ma))


//if else

function shouldIGetALicense(age){
    if(age > 18){
        return true
    } else{
        return false
    }
}
let decision = shouldIGetALicense(21)

console.log(decision)