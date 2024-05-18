// Write A Function That Takes An Array Of Numbers And Returns The Maximum Value.

let arr = [5, 7, 12, 2, 25, 10, 9, 20];
let max = -100000000000

for (let i = 0; i < arr.length; i++){
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);