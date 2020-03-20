module.exports = function toReadable(number) {

    const UNITS = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };

    const DOZENS = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };


    let dozens;
    let dozensBig;
    let hundreds;
    let arr = [];
    let readable;

    if (number === 0) {
        readable = 'zero';
        return readable;
    }

    if (number > 0 && number < 20) {
        readable = UNITS[number];
        return readable
    } else {
        if (number >= 20 && number < 100) {

            dozens = number % 10;
            dozensBig = Math.floor(number / 10);

            arr.push(DOZENS[dozensBig]);
            arr.push(UNITS[dozens]);

            return arr.join(' ').trim();
        } else {
            if (number - (Math.floor(number / 100) * 100) < 20) {
                hundreds = Math.floor(number / 100);
                dozens = number - (hundreds * 100);

                arr.push(UNITS[hundreds] + ' hundred');
                arr.push(UNITS[dozens]);

                return arr.join(' ').trim();

            } else {
                hundreds = Math.floor(number / 100);
                dozensBig = Math.floor((number - (hundreds * 100)) / 10);
                dozens = number - (Math.floor(number/10) * 10);

                arr.push(UNITS[hundreds] + ' hundred');
                arr.push(DOZENS[dozensBig]);
                arr.push(UNITS[dozens]);

                return arr.join(' ').trim();
            }
        }
    }
};
