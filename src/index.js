const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};





function decode(expr) {
    let arrExpr = [];
    let arrTen = [];
    let subArr = [];
    let arrMorse = [];
    let arrResult = [];
    let arrEEE = [];
    let finishStr = '';

    arrExpr = expr.split('');

    arrExpr.forEach((el, index) => {
        if ((index + 1) % 10 === 0) {
            subArr.push(el);
            arrTen.push(subArr.join(''));
            subArr = [];
        } else {
            subArr.push(el);
        }
    });

    arrMorse = arrTen.map(function (arrEl) {
        arrResult = arrEl.split('');
        let newArray = [];
        for (let i = 0; i < arrResult.length; i += 2) {
            newArray.push(arrResult.slice(i, i + 2).join(''));
        }

        let arrSymbol = newArray.map(el => {
            if (el === '10') {
                el = '.';
            }
            if (el === '11') {
                el = '-';
            }
            return el;
        });

        let strSymbol = arrSymbol.filter(function (el) {
            return el !== '00';
        }).join('');


        return strSymbol;
    });

    console.log(arrMorse);

    arrMorse.forEach(el => {
        if (el === '**********') {
            finishStr += ' ';
        } else {
            finishStr += MORSE_TABLE[el];
        }
    });

    return finishStr;
}




module.exports = {
    decode
}