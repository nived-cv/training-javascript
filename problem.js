
const arr1 = [0, 0, 0]
const arr2 = [1, 1, 1, 1, 1, 1, 1]

const main = (arr1, arr2, OFFSET) => {
	let index1 = 0
	// since the index is incremented initially even before assignment
	let index2 = -1
	let count = 0
	let flag = 0
	const newArr = new Array(arr1.length + arr2.length)

	for (var i = 0; i < (arr1.length + arr2.length); i++) {
		// choosing the next first element in the corresponding array 
		// better way is to select the first element of array and then pop it @ [0] 
		newArr[i] = flag === 0 ? arr1[index1] : arr2[index2]
		if (index2 < arr2.length - 1 && (count < OFFSET || OFFSET === 0)) {
			flag = 1
			index2++
			count++
			continue
		}
		index1++
		flag = 0
		count = 0
	}
	return newArr
}

console.log(main(arr1, arr2, 3))
