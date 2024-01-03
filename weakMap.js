
const test1 = () => {
    let obj = { "life": 100 }
    let arr = [obj]
    obj = null
    console.log(arr)

}

const test2 = () => {
    let john = { name: "das" }
    let map = new Map()
    map.set(john, 'age')
    //john = null
    console.log(map.get(john))
}

const test3 = () => {
    const weakMap = new WeakMap()
    let john = { name: "johnZ" }
    weakMap.set(john, "name")
    john = null
    console.log(weakMap.get(john))
}

const test4 = () => {
    let temporarySet = new WeakSet()
    let john = { name: "John" }
    temporarySet.add(john)
    //john = null
    console.log(temporarySet)
}

const test5 = () => {
    let message = { "message": "content" }
    let temp = new Set([message])
    message = null
    console.log(temp)
}

test4()