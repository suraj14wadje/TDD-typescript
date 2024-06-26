import { add } from "./calculator";

describe("calculator", () => {

  describe("add", () => {
    it("returns zero for empty string", () => {
      const result = add("");
      expect(result).toEqual(0);
    });

    it("returns number when only single digit is passed", () => {
      const result = add("6");
      expect(result).toEqual(6);
    });

    it("returns sum of comma separated numbers", () => {
      const result = add("5,6");
      expect(result).toEqual(11);
    });

    it("handles any amount of numbers", () => {
      const result = add("5,6,2,4");
      expect(result).toEqual(17);
    });

    it("handles new line between the numbers instead of comma", () => {
      const result = add("1\n2,3");
      expect(result).toEqual(6);
    });

    it("handles any delimiter", () => {
      const result = add("//;\n1;;;2");
      expect(result).toEqual(3);
    });

    it("throws exception when negative numbers are passed", () => {

        expect(()=>add("//;\n1;;;-2")).toThrow('negative numbers not allowed -2')
        expect(()=>add("//;\n-1;;;-2")).toThrow('negative numbers not allowed -1,-2')
        expect(()=>add("//;\n-1;;;-2,1 -10")).toThrow('negative numbers not allowed -1,-2,-10')
        
    });

    it("ignores numbers greater than 1000", () => {
        const result = add("//;\n1;;;2, 1001");
        expect(result).toEqual(3);
    });

    it('handles delimiters of any length',()=>{
        const result = add("//[***]\n1***2***3");
        expect(result).toEqual(6);
    })

    it('handles multiple delimiters',()=>{
        const result = add("//[*][%]\n1*2%3");
        expect(result).toEqual(6);
    })

    it('handles multiple delimiters with length longer than one character',()=>{
        const result = add("//[*][%]\n1*****2%%%%%%3");
        expect(result).toEqual(6);
    })

    it('allows decimal numbers as well',()=>{
      let result = add("2.3, 4.7");
      expect(result).toEqual(7.0);

      result = add("2.3, 4.6");
      expect(result).toEqual(6.9);
    })
    
  });
});
