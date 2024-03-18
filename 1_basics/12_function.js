/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10 / 2 % 3 String으로 변환해서
 * 반환하고 싶다면 어떻게 해야할까?
 */
console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString()); // * 10 / 2 % 3 중복코드
console.log('=================');

/**
 * DRY
 * D -> Don't
 * R -> Respeat
 * Y -> Yourself
 */
function calculate(){
    console.log((2 * 10 / 2 % 3).toString());
}
// calculate();

function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}
calculate(4);
console.log('=================');

/**
 * Parameter : 함수에서 입력받는 값에 대한 정의
 * Argument : 실제 입력하는 값
 */

function multiply(x, y){
    console.log(x * y);
}
multiply(2, 4);

function multiply(x, y=10) {
    console.log(x * y);
}
multiply(2); // y를 입력하지 않으면 default값으로 있는 10이 적용 되서 20이 출력됨

/**
 * 반환받기
 * return 받기
 */
function multiply(x, y){
    return x * y;
}
const result1 = multiply(2,4); // multiply(x, y)에 2,4를 넣고 return
console.log(result1);
console.log('=================');

/**
 * Arrow 함수
 */
const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(3,4));

// 위에 함수와 같음
const multiply3 = (x, y) => x * y;
console.log(multiply3(3,4));
console.log('=================');

const multiply4 = x => x * 2; // parameter가 하나일땐 괄호 빼도 됨
console.log(multiply4(2));

// 함수에 함수에 함수
const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x) {
    return function (y) {
        return function (z) {
            return`x: ${x} y: ${y} z: ${z}`
        }
    }
}
console.log(multiply6(3)(4)(5));
console.log('=================');

const multiplyTwo = function (x, y) {
    return x * y;
}
console.log(multiplyTwo(4,5));
console.log('=================');

const multiplyThree = function (x, y, z){
    console.log(arguments); // [Arguments] { '0': 4, '1': 5, '2': 6 }
    return x * y * z;
}
console.log(multiplyThree(4, 5, 6));
console.log('=================');

const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a,b) => a * b, 1);
}
console.log(multiplyAll(3,4,5,6,7,8,9,10));
console.log('=================');

// immediately invoked function
(function (x,y) {
    console.log(x * y);
})(4, 5);
console.log('=================');

console.log(typeof multiply());
console.log(multiply instanceof Object); // 좌측에 있는게 우측과 같은 타입인지 true/false