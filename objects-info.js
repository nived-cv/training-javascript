// objects
// objects to primitive conversion


const obj = { name: "das", age: 20, blood: "0-ve" }

const test1 = () => {
    for (let values of obj)
        console.log(values)
}

const test2 = () => {
    const newObj = Object.fromEntries(
        Object.entries(obj).map(entry => entry[0], entry[1])
    )
    console.log(newObj)
}
test2()
