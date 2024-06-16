

export const add = (numbers : string)=>{
    let sum = 0;

    if(numbers){
        const nonDigitRegex = /[^\d-]/g;
        const delimiter = ' ';
        const greatestAllowedNumber = 1000;

        const filteredNumbers = numbers.replace(nonDigitRegex,delimiter)
        const numbersArray = filteredNumbers.split(delimiter).map(Number);
        const negativeNumbers = numbersArray.filter(num=>num<0);

        if(negativeNumbers.length>0){
            throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`)
        }
    
        sum = numbersArray.filter(num=>num<=greatestAllowedNumber).reduce((prev,current)=>prev+current);
    }

    return sum;
}