import { add } from "./calculator";


describe('calculator',()=>{

    describe('add',()=>{
        it('returns zero for empty string',()=>{
            const result = add("");
            expect(result).toEqual(0)
        })

        it('returns number when only single digit is passed',()=>{
            const result = add("6");
            expect(result).toEqual(6)
        })

        it('returns sum of comma separated numbers',()=>{
            const result = add("5,6");
            expect(result).toEqual(11)
        })

        it('handles any amount of numbers',()=>{
            const result = add("5,6,2,4");
            expect(result).toEqual(17)
        })

        it('handles new line between the numbers instead of comma',()=>{
            const result = add("1\n2,3");
            expect(result).toEqual(6)
        })
    })

    
})