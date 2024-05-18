const arr = [
    {
        name: 'ashik',
        age:23
    },
    {
        name: "joy",
        age:22
    },
    {
        name: "sabbir",
        age:24
    },
    {
        name: "sagor",
        age:25
    }
]

// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

let targetName = "sagor"
let setAge = 30

for (let i = 0; i < arr.length; i++){
    if (arr[i].name == targetName) {
        arr[i].age=setAge
    }
}

for (let i = 0; i < arr.length; i++){
    console.log(`Name: ${arr[i].name} and Age: ${arr[i].age}`)
}