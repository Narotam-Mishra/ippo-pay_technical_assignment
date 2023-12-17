
// using chai module to test

const chai = require('chai');
const assert = chai.assert;

// import the function to be tested

const findMinStepsForStrongPassword = require('./Assignment1');

// describe the test suite

describe('MinimumStepsForStrongPassword', function() {

    // Test case - 1
    it('should return minimum steps to make given string strong password', function () {
        assert.equal(findMinStepsForStrongPassword("a"), 5)
    });
    

    // Test case - 2
    it('should return minimum steps to make given string strong password', function () {
        assert.equal(findMinStepsForStrongPassword("aA1"), 3)
    });
    

    // Test case - 3
    it('should return minimum steps to make given string strong password', function () {
        assert.equal(findMinStepsForStrongPassword("1337C0d3"), 0)
    });
    
})