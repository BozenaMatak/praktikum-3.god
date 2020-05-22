var assert = require('assert');
const fizzBuzz = require("../fizzBuzz");

describe('testings fizzbuzz', () => {
    describe('testing modules fizzbuzz check', () =>{
       
        it('fizzBuzz bi trebala biti funkcija', () => {
            fizzBuzz.check();
        });
        
        it('Bilo koji broj dijeljiv sa 3 daje "Fizz"', () => {
            assert.equal("Fizz", fizzBuzz.check(3));
        });
        it('Bilo koji broj dijeljiv sa 5 daje "Buzz"', () => {
            assert.equal("Buzz", fizzBuzz.check(5));
        });
        it('Broj dijeljiv sa 3 i sa 5 daje "fizzBuzz"', () => {
            assert.equal("fizzBuzz", fizzBuzz.check(15));
        })
        
    })
})

//R-G-R red-green-refactore
//napisati sljedeći test case