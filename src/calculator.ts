

export const add = (numbers : string)=>{
    let sum = 0;

    if(numbers){
        const filteredNumbers = numbers.replace('\n',',')
        console.log(filteredNumbers)
        sum = filteredNumbers.split(',').map(Number).reduce((prev,current)=>prev+current);
    }

    return sum;
}