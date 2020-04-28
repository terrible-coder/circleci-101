const { add } = require("../build/index");

describe("Test", function() {
	it("adds", function() {
		expect(add(1, 2)).toBe(3);
	});
});