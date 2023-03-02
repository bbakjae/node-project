let str = "Hello World!";

// length -> 문자열의 길이
// console.log(str.length);

// indexOf -> 해당 문자열의 위치(인덱스)
// console.log(str.indexOf("l"))
// console.log(str.lastIndexOf("l"));
// if (screenTop.indexOf("keyword") !== -1) {
//     console.log("find!");
// } else {
//     console.log("not found!");
// }

/**
 * slice -> 문자열을 시작 지점부터 끝 지점 전까지 잘라낸다
 */
// let res = str.slice(0, 5);
// console.log(str);
// console.log(res);
// const code =
//     (Math.floor(Math.random() * 10000000)
//         .toString(32)
//         + "a5dg32v7sa2er12").slice(0, 6);
// console.log(str.slice(-6));

// substring -> slice와 동일하게 문자열 자르기
// 단, 음수 허용하지 않음
// console.log(str.substring(0, -5));

// replace -> 특정 문자를 어떠한 문자로 치환(변환)
// const str2 = "abcabcabc"
// // let res = str2.replace("a", "d")

// let res = str2.replaceAll("a", "d")
// console.log(res);

/**
 * split -> 문자열을 문자열로 나누기
 */
// let personalId = "000000-1234567";
// let data = personalId.split("-")
// data[1] = data[1][0] + "******"
// let res = data.join("-");
// console.log(res);

/**
 * match -> 특정한 문자 or 정규식으로
 *          해당 규칙을 찾아서 반환
 */
// console.log(str.match("ll"));

/**
 * includes -> 문자열이 특정 문자열을 포함하는지
 */
// console.log(str.includes("Hell"));

/**
 * toLowerCase -> 대문자를 소문자로 변환
 * toUpperCase -> 소문자를 대문자로 변환
 */
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

/**
 * startsWith -> 특정 문자열로 시작하는지 검사 // keyword%
 * endsWith -> 특정 문자열로 끝나는지 검사 // %keyword
 * includes // %keyword%
 */
// console.log(str.startsWith("Hello"));
// console.log(str.endsWith("Hello"));

/**
 * trim -> 문자열의 양 끝에 불필요한 문자를 제거
 * trimStart
 * trimEnd
 */
// let str2 = "   Hello World   ";
// console.log(str2.trim());
// console.log(str2.trimStart());
// console.log(str2.trimEnd());
// let title = "                   ";
// title = title.trim();
// if (title) {
//     console.log("OK");
// } else {
//     console.log("NOT OK");
// }