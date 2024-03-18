/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적
let test = age;
console.log(typeof test, test)

// 기능적으로 실행이 되는것이지 이렇게 쓰면 안됨.
console.log('98' + 2); // 98이 String + 2라는 string
console.log('98' * 2); // String 에는 곱하기 개념이 없어서 강제적(암묵적)으로 숫자가됨
console.log('98' - 2); // String 에는 빼기 개념이 없어서 강제적(암묵적)으로 숫자가됨
console.log('================')

/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());
console.log('================')

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof + '1', +'1');

/**
 * Boolean 타입으로 변환
 * String 값 안에 값이 들어있으면 true다.
 */
console.log(!'x');
console.log(!!'x');
console.log(!!''); // String 값 안에 값이 없어서 false
console.log(!!0);

/**
 * false가 반환되는 경우
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 */