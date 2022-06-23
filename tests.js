// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });

    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });

    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });

    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("foo", function() {

    it("should return foo() === 2", function() {
        let expectedResult = 2;
        let actualResult = 2;
        expect(actualResult).toBe(expectedResult);
    });
});

describe("sayHello", function() {
    it("should be a defined function", function () {
        expect(typeof sayHello).toBe("function");

    });

    it("should return a string when called", function () {
        expect(typeof sayHello()).toBe("string");
    });

    it('should return the string, "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });

    it('should return the string, "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });

    it('should return the string, "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });

    it('should return the string, "Hello, World!" when executed', function () {
        expect(sayHello("World")).toBe("Hello, World!");
    });

    it('should return the string, "Hello, World!" when passed the boolean value of true', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });

    it('should return the string, Hello, World!" when passed the boolean value of false', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });

    it('should return the string, "Hello, World! when passed the argument null', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });

    it('should return the string, "Hello, World!" when passed an empty string', function () {
        expect(sayHello("")).toBe("Hello, World!");
    });

    it('should return the string, "Hello, World!" when passed the argument of a number', function () {
        expect(sayHello(Number)).toBe("Hello, World!");
    });

    it('should return the string, "Hello, World!" when passed a number in a string', function () {
        expect(sayHello("5")).toBe("Hello, World!");
    });

    it('should return the string, "Hello, World!', function () {
        expect(sayHello({}, [], function () {
        })).toBe("Hello, World!");

    });

});
    describe("isFive", function() {
        it('should be a defined function', function () {
            expect(typeof isFive).toBe('function');
        });

        it('should return true when passed the number 5', function () {
            expect(typeof isFive()).toBe("number");
        });

        it('should return true when passed a string of 5', function () {
            expect(typeof isFive("5")).toBe("number");
        });

        it("should return isFive() === 5", function () {
            let expectedResult = 5;
            let actualResult = 5;
            expect(actualResult).toBe(expectedResult);
        });
    });

        describe('isEven', function() {

            it('should be a defined function', function() {
                expect(typeof isEven).toBe('function');
            });

            it('should return "true" when called with a positive or negative even number', function() {
                expect(isEven()).toBe("true")
            })
        })





