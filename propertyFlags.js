
const random = () => {

    function next(){
        next.digit  = next.digit << 1
        return next.digit
    }
    next.digit = 101
    return next
}

const newRand = random()

console.log(newRand())
console.log(newRand())
console.log(newRand())