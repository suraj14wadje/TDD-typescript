

export const add = (numbers : string)=>{
    let sum = 0;

    if(numbers){
        sum = numbers.split(',').map(Number).reduce((prev,current)=>prev+current);
    }

    return sum;
}