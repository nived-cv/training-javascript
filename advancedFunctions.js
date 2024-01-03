
// maximum stack size is independent of browser it is size and not call

const {sum} = require('./sum')

//console.log(sum(1,2))

function makeCounter() {
    let count = 0
    return function () {
        return count++
    }
}

let counter = makeCounter()

// console.log(counter())
// console.log(counter())
// console.log(counter())

const setFun = () => {
    let set1 = new Set([1,2,3,2])
    console.log(set1.delete(1))
    console.log(set1)
}

//setFun()

const functionMaker = () => {
    const myFun = new Function( String(setFun))
    console.log(myFun())
}

functionMaker()

const sayHi = (person) => console.log(person)
const intervalFn = (person) => setTimeout(sayHi,1000,person)

const decoratorIntervalFn = (func) => {
    let cache = new Map()

    return function(x) {
        if(cache.has(x)){
            return cache.get(x)
        }

    let result = func(x)
    cache.set(x,result)
    return result
    }
}

let a = decoratorIntervalFn(intervalFn)
let b = decoratorIntervalFn(intervalFn)

// console.log(a)
// console.log(b)

