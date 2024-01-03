
// maximum stack size is independent of browser it is size and not call

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

setFun()