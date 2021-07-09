# [The area of triangle](https://edabit.com/challenge/3CaszbdZYGN4otQD8)
This function takes the base and height of a triangle and returns its area.

## Syntax
> triangleArea(`number`, `number`) -> `number`

### Parameters
**base**: `number`;
**height**: `number`;

### Return Value: `number`
A positive number.

## Test Cases
My tests from the sandbox:
```js
describe('calculate the area of the triangle', () => {
  it('1, 1 -> 0.5', () => expect(triangleArea(1,1)).toEqual(0.5));
  it('2, 2 -> 2', () => expect(triangleArea(2,2)).toEqual(2));
  it('3, 3 -> 4.5', () => expect(triangleArea(3,3)).toEqual(4.5));
});
```
## Use Cases
> We ask the user to input base and height as prompt, and then return the area of the triangle.
 
```js
const triangle = () => {
    let inputBase = prompt('Please enter the base of the triangle');
    let inputHeight = prompt('Please enter the height of the triangle');
const baseNumber = Number(inputBase);
const heightNumber = Number(inputHeight);

return baseNumber * heightNumber / 2;
}
```js
// Pustur
const triArea = (base, height) => (base * height) / 2;
```
### Strategy
1. multiply the parameters 
2. divide by two
3. return the area of the triangle

### Implementation
Pustur returned multiplied the base and the height, and divided by 2

### Possible Refactors
This strategy could also be implemented with these Implementation ...
- give the function a more descriptive name `triangleArea`
  
### References
This solution was interesting because of how Dannerd used JS, the only new that confused me for a minute was the implicit return:
- implicit returns: [kbarker.dev](https://kbarker.dev/blog/implicit-return-statements-in-javascript/)
---
## [ldq](https://www.codewars.com/users/ldq)
```js
const quarterOf = month => {
  return Math.floor(((month + 11) / 3) % 4) + 1;
};
```
### Strategy
Ldq approached this problem mathematically. Rather than selecting from a list of possible answers, they created a formula to calculate the correct value from the argument.
### Implementation
**Math.floor(`number`)**: This function rounds a floating point number down to the nearest integer
**parenthesis**: As the normal order of operations would not work, ldq used parenthesis to group the mathematical operators differently.
**+, /, %, +**: these operators combine the argument with hard-coded values to calculate the correct solution.
### Possible Refactors
This strategy could also be implemented using these (but not only these) Implementation ...
- an arrow function with implicit return
- bitwise operators (if you want to make your life difficult)
- `Math.ceil` to round up, instead of rounding down
### References
For ldq's solution I needed to review operator precedence and look up how `Math.floor` works.
- operator precedence: [scriptingmaster](http://www.scriptingmaster.com/javascript/operator-precedence.asp), [Avelx, BOMDAS](https://www.youtube.com/watch?v=v-L5v6GEFcY), [GreeneMath](https://www.youtube.com/watch?v=XI2KKC_7FAM)
- `Math.floor`: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
---
### [My Solution](https://www.codewars.com/users/colevandersWands/completed_solutions)
```js
const quarterOf = month => {
  if (typeof month !== 'number') {
    throw new TypeError('month is not a number');
  }
  if (!Number.isInteger(month)) {
    throw new RangeError('month is not an integer');
  }
  if (month < 1) {
    throw new RangeError('month is less than 1');
  }
  if (month > 12) {
    throw new RangeError('month is greater than 12');
  }
  if (month >= 1 && month <= 3) {
    return 1;
  } else if (month >= 4 && month <= 6) {
    return 2;
  } else if (month >= 7 && month <= 9) {
    return 3;
  } else if (month >= 10 && month <= 12) {
    return 4;
  }
};
```
### Strategy
I took the less clever and more transparent strategy of checking what range the month fits in (1-3, 4-6, 7-9, 10-12) and returning the quarter based on this check.
### Implementation
**`throw new`**: I implemented a type-guards and three range guards. This isn't required by CodeWars (all test cases are valid), but it helps me understand the function's behavior and use cases when it's clear what the parameters should be.
**if, else if**: My strategy was all about executing different code for different inputs. I could have used ternaries, but I think conditionals are easier to read.
**typeof _ !== _**: I used `typeof` and strict inequality to check the argument's type
**Number.isInteger**: Since ES6, JS has a built-in method for checking if something is an integer. nice
**>, <, >=, <=**: For the guards and the main logic, I needed to check what range the parameter falls into. In the main logic I could have just checked if the month was less than a number, but I like being able to see the min and max for each range.
### Possible Refactors
- get rid of the extra guards
- use an else instead of the final if-else
- really, all of the else-ifs could just be if's since each one returns
- have simpler conditional checks in the main logic
- use a big nested ternary, but that can be nasty to read
- use a switch/case, but those can be more difficult to debug
### Inspired By
The solutions I wrote up were interesting, but not something I wanted to write. [kunaguero](https://www.codewars.com/users/kunaguero)'s solution inspired me. They used simple conditionals, but unlike other solutions they logged if the input was invalid if it was not in range. This inspired me to write guards for the parameters.
### References
I tried to write my solution using only JS that I already understood, the only thing I needed to look up was `Number.isInteger`:
- `Number.isInteger`: [StackOverflow](https://stackoverflow.com/a/16476634), [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
---
## Retrospective
Studying ldq's solution I finally understood why to use parenthesis, I'd always wondered why you'd need to wrap thing in extra parenthesis. Experimenting with their solution I found that it only works with the parenthesis like they are. any other way and it doesn't pass the tests. (order of operations!)
Statements and expressions also clicked for me. Studying solutions that do and don't use implicit returns helped to see this.
I'm still struggling to tell the difference between strategy and implementation. Its hard for me to describe how the problem was solved without mentioning the Implementation that are used.