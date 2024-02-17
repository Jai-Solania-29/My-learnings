const numbers = [2,5,6,8000,10,55,70,2000];

let max = numbers[0];
for(let i = 1; i<numbers.length; i++ ) {
    if(numbers[i]> max) {
        max = numbers[i];
    }
}
console.log(max);