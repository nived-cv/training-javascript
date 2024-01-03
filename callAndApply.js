
const obj = {
    "name": "Meowist"
}

function printName() {
    console.log(this.name)
}
printName.apply(obj)
// functionName.apply(objectName)
