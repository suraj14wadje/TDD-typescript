

export const add = (numbers : string)=>{
    let sum = 0;

    if(numbers){
        const nonDigitRegex = /[^\d]/g;
        const filteredNumbers = numbers.replace(nonDigitRegex,' ')
        console.log(filteredNumbers)
        sum = filteredNumbers.split(' ').map(Number).reduce((prev,current)=>prev+current);
    }

    return sum;
}