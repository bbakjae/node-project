/**
 * JavaScript Type
 */

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//pop -> 배열 뒷부분 값 삭제
// var a = arr.pop()
// console.log("pop", a);
// console.log(arr);

//push -> 배열 뒷부분에 값 삽입
// arr.push(10)
// arr.push([1, 2, 3])
// console.log(arr);

//unshift -> 배열 앞부분에 값을 삽입
// arr.unshift(10)
// console.log(arr);

//shift -> 배열 앞부분에 값을 삭제
// arr.shift()
// console.log(arr)

//splice -> 배열의 특정 위치에 요수 추가/삭제
// arr.splice(3, 2) // 3번 인덱스부터 2개 삭제
// console.log(arr);
// arr.splice(3, 2, 10, 11) // 3번 인덱스부터 2개 삭제 후 10, 11 삽입
// console.log(arr)

//slice -> 배열에서 지정한 시작 위치부터 끝 지점까지 잘라서 복사한다.
// var newArr = arr.slice(3, 5)
// console.log(arr);
// console.log(newArr);

//concat -> 배열 끝에 배열을 붙이고 복사한다.
// var arr2 = [1, 2, 3]
// var newArr = arr.concat(arr2)
// console.log(newArr);

//every -> 배열의 모든 요소가 제공된 함수로 반환된 값이 참인지를 검사
// function check(v) {
//     return v < 9
// }

// var result = arr.every(check)
// // var result = arr.every((v) => v < 9)
// // var result = arr.every((v) => { return v < 9 })
// console.log(result);

//some -> 배열의 요소 중 하나라도 제공된 함수로 반환된 값이 참인지를 검사
// function check(v) {
//     return v < 0
// }

// var result = arr.some(check)
// console.log(result);

//forEach -> 배열의 각 원소들을 지정된 함수로 실행한다.
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// arr.forEach(v => {
//     console.log(v)
// })

//map -> 배열의 각 원소들을 지정된 함수로 실행 후
//       반환된 값으로 새로운 배열을 생성한다

// var newArr = arr.map(v => {
//     let res = v * 2;
//     return res;
// })
// console.log(newArr);
// var infos = [
//     {
//         loginId: "user1",
//         password: "qwer1234"
//     },
//     {
//         loginId: "user2",
//         password: "qwer1234"
//     },
//     {
//         loginId: "user3",
//         password: "qwer1234"
//     },
//     {
//         loginId: "user4",
//         password: "qwer1234"
//     },
// ]

// const view = infos.map(v => {
//     v.password = "*********"
//     return v
// })
// console.log(view);

//filter -> 각 요소별로 지정된 함수를 수행 후 true인 값만 필터링하여 복사한다
// var newArr = arr.filter(v => v % 2 === 0)
// console.log(newArr);

// var boards = [
//     {
//         title: "title1",
//         content: 'content1'
//     },
//     {
//         title: "title2",
//         content: 'content1'
//     },
//     {
//         title: "title3",
//         content: 'content1'
//     }
// ]
// var searchKey = "1"
// var view = boards.filter(v =>
//     v.title.includes(searchKey) || v.content.includes(searchKey))
// console.log(view);

//reduce -> 배열의 각 요소들에 대해 누산된(함수를 거친) 값으로 반환되도록
//           p  c
// arr = [1, 2, 3, 4, 5]
// var res = arr.reduce((p, c, i) => {
//     console.log("이전 값", p);
//     console.log("현재 값", c);
//     console.log("인덱스 ", i);
//     console.log("-----------");
//     return p + c
// })
// console.log(res);

//reverse -> 배열을 거꾸로
// arr.reverse()
// console.log(arr);

//sort -> 정렬
// arr = [2, 5, 12, 4, 67, 4, 2, 46, 14, 4]
// arr.sort((a, b) => b - a)
// console.log(arr);

//join
// var res = arr.join("")
// console.log(res);

// var infos = [
//     { name: "park", age: 18 },
//     { name: "lee", age: 22 },
//     { name: "kang", age: 23 },
//     { name: "park", age: 17 },
// ]
// var res = infos
//     .filter(v => v.age > 20)
//     .map(v => v.name)
//     .join(", ")
// console.log(res);

//find -> 요소들 중에서 지정된 함수의 반환값이 true인 첫번째 요소를 반환
// const res = infos.find(v => v.name === "qqq")
// console.log(res);
