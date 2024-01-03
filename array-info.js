
let arr = [1, 2, 3]

const exp1 = () => {
    arr.unshift(0, 1)
    console.log(arr)
}

const exp2 = () => {
    let spliced = arr.splice(0, 2)
    console.log("array", arr, "spliced elems", spliced)
}

const exp3 = () => {
    let sliced = arr.slice(0, 2)
    console.log("array", arr, "sliced elems", sliced)
}
exp3()
