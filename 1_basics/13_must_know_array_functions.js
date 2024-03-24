/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push() = 실행하는 array 마지막 index에 추가
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);
console.log('--------------------');

// pop() = 실행하는 array 마지막 index 삭제
console.log(iveMembers.pop());
console.log(iveMembers);
console.log('--------------------');

// shift() = 실행하는 array 첫번째 index  삭제
console.log(iveMembers.shift());
console.log(iveMembers);
console.log('--------------------');

// unshift() = 실행하는 array 첫번째 index에 추가
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);
console.log('--------------------');

// splice() = 특정한 index를 삭제할 수 있음 (첫번째 인덱스부터, 몇개를 삭제 할지)
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);
console.log('--------------------');

 iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

 console.log(iveMembers);
console.log('--------------------');

 // concat() = push() 함수랑 같은 역할같지만, 다른 메모리 공간에 저장함 (원래 array 보존)
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);
console.log('--------------------');

// slice() = 어떤 index를, 몇 번 index 까지 자르는지(-1) , 다른 메모리 공간에 저장함 (원래 array 보존)
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);
console.log('--------------------');

// spread operator = ...을 넣음으로써 리스트를 그대로 펼쳐서 넣음
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);
console.log('--------------------');

// 리스트 안에 리스트를 추가하는 것뿐
let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3);
console.log('--------------------');

let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([
    ...iveMembers,
] === iveMembers);
console.log('--------------------');

// join() = 리스트의 ,를 기준으로 모든값을 String으로 출력
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));
console.log('--------------------');

// sort() = 오름차순 정렬
iveMembers.sort();
console.log(iveMembers);
console.log('--------------------');

// revers() = 내림차순 정렬
iveMembers.reverse();
console.log(iveMembers);
console.log('--------------------');

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);
console.log('--------------------');

// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b)=>{
    return a > b ? 1 : - 1;
});
console.log(numbers); // 1) 1 ~ 9까지 오름차순으로 정렬
console.log('--------------------');

numbers.sort((a, b) =>
    a > b ? -1 : 1);
console.log(numbers); // 1 ~ 9까지 내림차순으로 정렬
console.log('--------------------');

// map()
console.log(iveMembers.map((x) => x ));
console.log(iveMembers.map((x) => `아이브: ${x}` ));

// 안유진에서만 아이브:안유진이 되도록 조건
console.log(iveMembers.map((x) => {
    if(x === '안유진'){
        return `아이브: ${x}`;
    }else {
        return x;
    }
}));
console.log(iveMembers);
console.log('--------------------');

// filter() = 필터링, true에 해당하는 모든값
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => x % 2 === 0)); // 짝수만 필터링
console.log('--------------------');

// find() = 필터링과 비슷하지만 모든값이 아닌 첫번째 값만
console.log(numbers.find((x) => x % 2 === 0 ));

// findIndex() = find()와 같지만 index를 반환
console.log(numbers.findIndex((x) => x % 2 === 0 ));

// reduce() = 기존반환값이 p에 들어가고 다음값이 n에 들어감
console.log(numbers.reduce((p , n) => p + n , 0 ));
// 1. 초기값이 0이 p에 입력된다.
// 2. numbers 어레이의 첫번재 값인 1이 n에 입력된다.
// 3. p + n 즉, 0 + 1의 결과값인 1이 반환된다.
// 4. 3에서 반환한 값(1)이 p에 입력된다.
// 5. 어레이의 두번째 값인 8이 n에 입력된다.
// 6. p + n 즉, 1 + 8의 결과값인 9가 반환된다.
// 7. 6에서 반환한 값(9)가 p에 입력된다.
// 8. numbers 리스트의 모든 값들을 다 순회할 때까지 반복하여, 결국 모든값을 다 더한 25가 반환된다.
