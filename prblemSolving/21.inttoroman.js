var intToRoman = function (num) {
    const romanValues = {
        "M": "1000",
        "CM": "900",
        "D": "500",
        "CD": "400",
        "C": "100",
        "XC": "90",
        "L": "50",
        "XL": "40",
        "X": "10",
        "IX": "9",
        "V": "5",
        "IV": "4",
        "I": "1"
    }

    let roman = '';
    while (num > 0) {
        for (const key in romanValues) {
            const multiply = Math.floor(num / Number(romanValues[key]));
            if (multiply > 0) {
                for (let index = 0; index < multiply; index++) roman += key;
            }
            num = num - (multiply * Number(romanValues[key]));
        }
    }
    return roman;
};

console.log(intToRoman(3));