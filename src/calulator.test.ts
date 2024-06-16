import { add } from "./calculator";


describe('calculator',()=>{

    describe('add',()=>{
        it('returns zero for empty string',()=>{
            const result = add("");
            expect(result).toEqual(0)
        })
    })

    
})