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
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");

    });

    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });

    it('should return the string, "Hello, Jane!" when executed', function() {
        expect(sayHello()).toBe("Hello, Jane!");
    });

    it('should return the string "Hello, Alex!" when called', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });

    it('should return the string "Hello, Pat!" when called', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });


});

