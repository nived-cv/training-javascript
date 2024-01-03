

let num = 0b010101
const loop = () => {

    for (let i = 0; i < 10; i++) {
        num = num << 1
        //console.log(num)
    }
}

const test1 = () => {
    const arr = [1, 2, 3, 4, 5]
    const obj = { 1: "das", 2: "ashok" }

    for (let value of obj) {
        console.log(value)
    }
}

const test2 = () => {
    let str = "akash"
    str += " b"

    return str
}

console.log(test2())
