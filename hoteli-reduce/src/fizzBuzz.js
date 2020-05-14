function fizzBuzz() {
    let service = {
        check : check 
    }
    return service;
    function check(num) {
        if(num % 3 === 0 &&  num % 5 === 0) return "fizzBuzz"
        if(num % 3 === 0) return "Fizz";
        if(num % 5 === 0) return "Buzz";
        

    }
}
module.exports = fizzBuzz();