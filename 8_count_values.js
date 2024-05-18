// Write A Function That Counts The Number Of Vowels In A Given String.


let str = "Happy New YeAr"
let lowerLetter = str.toLowerCase();
let cnt = 0;
for (let i = 0; i < lowerLetter.length; i++){
    if (lowerLetter[i] == 'a' || lowerLetter[i] == 'e' || lowerLetter[i] == 'u' || lowerLetter[i] == 'i' || lowerLetter[i] == 'o') {
        cnt+=1
    }
}
console.log(cnt);