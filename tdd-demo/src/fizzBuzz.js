function fizzBuzz(value){
    let result = [];
    if (value % 3 === 0) result.push('fizz');
    if (value % 5 === 0) result.push('Buzz');   
    if (!result.length) result.push(value);
    return result;    
}
module.exports = fizzBuzz;