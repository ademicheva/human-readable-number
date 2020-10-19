module.exports = function toReadable(number) {
    let nums = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];

    let tenthNums = ['', '', 'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'
    ];

    let givenNum = number.toString();

    if (number < 0 || typeof number !== 'number') {
        return;
    }
    if (number === 0) {
        return 'zero';
    }
    // for numbers from 0 to 19
    if (number < 20) {
        return nums[number];
    }
    // for numbers from 20 to 99
    if (number >= 20 && number < 100) {
        let sum = tenthNums[givenNum[0]] + ' ' + nums[givenNum[1]];
        return sum.trim();
    }
    // for numbers from 100 to 990
    if (number >= 100 && number < 1000) {
        //let sum;
        // let sum = tenthNums[givenNum[0]] + ' ' + nums[givenNum[1]];
        //    let sum = nums[givenNum[0]] + ' hundred ' + tenthNums[givenNum[1]] + ' ' + nums[givenNum[2]];
        if (givenNum[1] === '0' && givenNum[2] === '0') {
            return nums[givenNum[0]] + ' hundred';
        } else {
            return nums[givenNum[0]] + ' hundred ' + toReadable(parseInt(givenNum[1] + givenNum[2]));
        }
        // } else if ((givenNum[1] === '0') || (givenNum[1] === '1')) {
        //     return nums[givenNum[0]] + ' hundred ' + nums[number];
        // } else {
        //     sum = nums[givenNum[0]] + ' hundred ' + tenthNums[givenNum[1]] + ' ' + nums[givenNum[2]];
        //     return sum.trim();
        // }
    }
}