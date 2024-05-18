// Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result.

function unique_number(arr) {
    let newArray = Array.from(new Set(arr));
    return newArray
}
let arr = [2, 4, 3, 2, 5, 4, 4, 5];
let unique_val = unique_number(arr);
for (let i = 0; i < unique_val.length; i++){
    console.log(unique_val[i]);
}