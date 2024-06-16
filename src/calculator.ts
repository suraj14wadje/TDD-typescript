

export const add = (numbers : string)=>{
    let sum = 0;

    if(numbers){
        const nonDigitRegex = /[^\d-]/g;
        const filteredNumbers = numbers.replace(nonDigitRegex,' ')
        console.log(filteredNumbers)
        const numbersArray = filteredNumbers.split(' ').map(Number);
        const negativeNumbers = numbersArray.filter(num=>num<0);
        if(negativeNumbers.length>0){
            throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`)
        }
       
        sum = numbersArray.filter(num=>num<=1000).reduce((prev,current)=>prev+current);
    }

    return sum;
}