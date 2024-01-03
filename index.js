
let message = { "message": "content" }
let temp = new WeakSet()
temp.add(message)
message = null
let sum = 0

for (let i = 0; i < 100; i++) {
    sum += i
}
console.log(temp)
