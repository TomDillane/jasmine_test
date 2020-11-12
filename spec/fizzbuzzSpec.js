describe("My fizzbuzz function", function(){
    beforeEach(function() {
        check = new fizzbuzz();
    });
    describe("Check nimber", function() {
        it("should exist", function() {
            expect(fizzbuzz).toBeDefined();
        })
        it("should return Fizz", function() {
            let result = fizzbuzz(9)
            expect(result).toBe("Fizz");
        })
        it("should return FizzBuzz", function() {
            let result = fizzbuzz(15)
            expect(result).toBe("FizzBuzz");
        })
        it("should return Buzz", function() {
            let result = fizzbuzz(5)
            expect(result).toBe("Buzz");
        })
        it("should return FizzBuzz", function() {
            let result = fizzbuzz(30)
            expect(result).toBe("FizzBuzz");
        })
        it("should return the number", function() {
            let result = fizzbuzz(4)
            expect(result).toBe(4);
        })
    })
})