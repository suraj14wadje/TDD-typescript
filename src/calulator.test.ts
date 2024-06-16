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
    })

    
})