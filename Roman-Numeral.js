function convertToRoman(num) {
    num = num.toString();
    var length = num.length;
    var numerals_1 = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
    var numerals_2 = ["", "X", "XX", 'XXX', "XL", "L", "LX", "LXX", "LXXX", "XC", "C"];
    var numerals_3 = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M"];
    var numerals_4 = ["", "M", "MM", "MMM"];
    var roman = 0;

    switch (length) {
        case 1:
            num = "000" + num;
            break;
        case 2:
            num = "00" + num;
            break;
        case 3:
            num = "0" + num;
            break;
    }

    roman = numerals_4[num[0]] + numerals_3[num[1]] + numerals_2[num[2]] + numerals_1[num[3]];
    console.log(roman);
    return roman;
}

convertToRoman(83)
