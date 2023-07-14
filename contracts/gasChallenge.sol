// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract gasChallenge {
    //Implement Fixed-Size Array Technique Here
    uint[10] numbers = [1,2,3,4,5,6,7,8,9,10]; //fixed size array
    
    //Function to check for sum of array
    //No changes required in this function
    function getSumOfArray() public view returns (uint256) {
        uint sum = 0;
        for (uint i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    }
    
    function notOptimizedFunction() public {
        for (uint i = 0; i < numbers.length; i++) {
            numbers[i] = 0;
        }
    }
    
    //Implement Remaining Gas Optimization Techniques Here
    //Sum of elements in the numbers array should equal 0
    function optimizedFunction() public{
        /* THIS IS JUST THE TRIALS */

        // uint[10] memory cachedNumbers = numbers; 
        // for (uint i = 0; i < cachedNumbers.length;) {
        //     cachedNumbers[i] = 0;
        //     unchecked {++i;}
        // }
        // numbers = cachedNumbers;

        // for (uint i = 0; i < numbers.length; i++) {
        //     unchecked {
        //         numbers[i] = 0;
        //     }
        // }

        /* THIS IS JUST THE TRIALS */

        //after many many trials including the ones that is not written above, this is the most optimized function I could do

        uint len = numbers.length; //caching the length
        unchecked { //using unchecked block
            for (uint i = 0; i < len; i += 2) { //for loop with increment of 2 to reduce iteration
                numbers[i] = 0;
                numbers[i + 1] = 0;
            }
        }
    }
 }
