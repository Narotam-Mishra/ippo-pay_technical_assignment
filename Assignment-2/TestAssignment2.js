
// using chai module to test

const chai = require('chai');
const assert = chai.assert;

// import the function to be tested

const findMinAbsDiff = require('./Assignment2');

// describe the test suite

describe('MinimumAbsoluteDifference', function() {

    // Test case - 1
    it('should return minimum absolute difference of sum of two arrays', function () {
        assert.equal(findMinAbsDiff([2,-1,0,4,-2,-9]), 0)
    });
    

    // Test case - 2
    it('should return minimum absolute difference of sum of two arrays', function () {
        assert.equal(findMinAbsDiff([3,9,7,3]), 2)
    });
    

    // Test case - 3
    it('should return minimum absolute difference of sum of two arrays', function () {
        assert.equal(findMinAbsDiff([-36,36]), 72)
    });
    
})