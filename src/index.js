let singleNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

let doubleNumbers = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen",
    "nineteen"]

let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

let hundredths = "hundred"

module.exports = function toReadable (number) {

    let str;

    if(number>=0&&number<=9)
    {
        str = singleNumbers[number]
    }

    else if (number>=10&&number<=19)
    {
        str=doubleNumbers[number-10]
    }

    else if (number>=20&&number<=99){
        if (number%10===0){
            str=tens[number/10-2]
        }
        else {
            str=dozens(number)
        }
    }
    else if (number>=100){
        if (number%100===0){
            str=hundreds(number)
        }
        else if (number%100>=1&&number%100<=9){
            str=hundreds(number)+" "+singleNumbers[number%100]
        }
        else if (number%100>=10&&number%100<=19){
            str=hundreds(number)+" "+doubleNumbers[number%100-10]
        }
        else {
            let remainder=number%100
            if (remainder%10!==0)
            str=hundreds(number)+" "+dozens(remainder)
            else str=hundreds(number)+" "+tens[Math.trunc(remainder/10)-2]
        }
    }
    return str
}

function dozens(number){
    return tens[Math.trunc(number/10)-2]+" " +singleNumbers[number%10]
}

function hundreds(number){
    return singleNumbers[Math.trunc(number/100)]+" "+hundredths
}
