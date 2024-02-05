const heights = [65, 85, 45, 99, 55, 63, 12, 14, 74, 87];
// function getMax(numbers){
//     console.log(numbers);
// }

// for(const num of numbers){
// console.log(num)
// }

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num>max){
            max = num;
        }
    }
    return max;
}


const max = getMax(heights);
console.log('max value is:', max);