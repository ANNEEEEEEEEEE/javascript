/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */
let original = '안녕하세요';
let clone = original;
console.log(original);
console.log(clone);

// 값을 그대로 가져오는것 - copy by value
clone += ' 안유진 입니다.';
console.log('============');
console.log(original);
console.log(clone);

//
let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;
console.log(originalObj);
console.log(cloneObj);
console.log('============');

originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);
console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
    name: '최지호',
    group: '코드팩토리',
};
console.log(originalObj === cloneObj);

const yuJin1 = {
    name: '안유진',
    group: '아이브',
};

const yuJin2 = yuJin1; // copy by reference
const yuJin3 ={
    name: '안유진',
    group: '아이브',
};

// true
console.log(yuJin1 === yuJin2);
// false
console.log(yuJin1 === yuJin3);
// false
console.log(yuJin2 === yuJin3);

/**
 * Spread Operator
 */
// copy by value == 완전이 새로운값 으로 복사
const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);
// false
console.log(yuJin4 === yuJin3); // 값은 같지만 메모리공간이 다름.

const yuJin5 = {
    year: 2003,
    ...yuJin3,
};
console.log(yuJin5);

// '코드팩토리'에 yuJin3의 name'안유진'이 덮어짐
const yuJin6 = {
    name: '코드팩토리',
    ...yuJin3,
};
console.log(yuJin6);

// 순서를 바꿈으로써 yuJin3의 name:'안유진'에 '코드팩토리'를 덮음
const yuJin7 = {
    ...yuJin3,
    name: '코드팩토리',
};
console.log(yuJin7);

const numbers = [1, 3, 5];
const numbers2 = [
    ...numbers,
    10,
];
console.log(numbers2);