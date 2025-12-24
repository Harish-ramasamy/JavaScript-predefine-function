const str = "reverse";

function reverseStr(str){
    let result = [];
    // const splt = str.split('')
    // console.log(splt.reverse().join(''))
    for (let x = str.length - 1; x >= 0; x--){
        result.push(str[x]);
    }
    // console.log(result.join(''))
    return result.join('')
}

const reversedWord = reverseStr(str)
console.log(reversedWord)