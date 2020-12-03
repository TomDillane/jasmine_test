describe("Calculator", function (){
   let num1 = 12;
   let num2 = 4;
   let val3 = "jack";
    
        it("should return 16", function() {
            
            expect(Calculator.add(num1, num2)).toBe(16);
        });
        it("should return 8", function() {
            
            expect(Calculator.sub(num1, num2)).toBe(8);
        });
        it("should return 48", function() {
            
            expect(Calculator.mul(num1, num2)).toBe(48);
        });
        it("should return 3", function() {
            
            expect(Calculator.div(num1, num2)).toBe(3);
        });
        it("should return Error", function() {
            
            expect(Calculator.add(val3, num2)).toBe("Error!");
        });
        it("should return Error", function() {
            
            expect(Calculator.add(num1, val3)).toBe("Error!");
        });
        it("should return Error", function() {
            
            expect(Calculator.add(val3, val3)).toBe("Error!");
        });
});
