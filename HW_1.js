var _ = require('underscore');
// Array of list is defined here:
var list = [
            {name: 'jack', age: 14}, 
            {name: 'jill', age: 19},
            {name: 'humpty', age: 20},
            {name:'Khyati', age: 23},
            {name:'shwetha', age:18}
            ];

//To check if each object has property key or not
for(let i=0; i<list.length; i++)
{
    if (list[i].hasOwnProperty('age'))
    {
        // Pluck function is used to get array for the property 'age'            
        result = _.pluck(list, 'age');
    }
    else
    {
        console.log("List does not have the parameter");
    }
}
console.log(result); //The array is stored in result

// a function is defined to check the if the age is greater than 18 or not
function checkAdult(age)
{
    return age>18;
}

//Filter is used to remove the age that is less than 18
const result2 = result.filter(checkAdult);
console.log(result2); //The returned age is stored in result2
