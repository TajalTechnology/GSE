var convert = function(s, numRows) {
    console.log(s);
    if(numRows < 2){
        return s;
    }

    const divisor = (numRows - 1) * 2;
    const rows = Array(numRows).fill("");

    // console.log(rows);

    for(let dividend = 0; dividend < s.length; dividend++){
        const mod =  dividend % divisor;
        const rowIndex = mod < numRows ? mod : divisor - mod;
        rows[rowIndex] += s[dividend];
    }

    return rows.join('');
};
const s = "PAYPALISHIRING", numRows = 4;
console.log(convert(s, numRows));