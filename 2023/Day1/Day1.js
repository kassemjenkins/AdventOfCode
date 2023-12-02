const fs = require('fs');

function parseFile() {
 
    const inputD = fs.readFileSync('./2023/Day1/Day1.txt', 'utf8');
    
    let text = inputD.toString();
    
    const nums = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "[0-9]": 0
    }

    const regexp = new RegExp("(?=(" + Object.keys(nums).map(word => word).join('|') +"))", 'gi');
    const split = text.split("\n");
    let sum = 0;
    split.forEach(line => {
        let num = 0;
        const matches = line.matchAll(regexp) || [];
        const digits = [...matches];
        const first = digits[0][1];
        const last = digits[digits.length-1][1];
        
        if(nums[first] !== undefined && nums[last] !== undefined) {
            num = nums[first] * 10  + nums[last];
        } else if (nums[first] !== undefined) {
            num = Number(nums[first] +  "" + last);
        } else if (nums[last] !== undefined) {
            num = Number(first +  "" + nums[last]);
        } else {
            num = Number(first + "" + last);
        }
        
        sum += num;
    });  

    return sum;
}

console.log(parseFile());

