const str = `
010-1234-5678
dlsduf@gmail.com
https://www.naver.com
I code really hard every day.
abbcccdddd.COM
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

// const regexp = new RegExp('i','gi')
// const regexp =/i/gi  //g 표현의 문자를 찾아라, i 대소문자 구문없이.
// console.log(str.match(regexp))

// console.log(str.replace(regexp, 'z'));

// const regexp = /hard/gi
// // console.log(regexp.test(str))  //=> ture
// console.log(str.replace(regexp, 'little'))


// console.log(str.match(/\.$/gim)) // 기능을 가진 특수기호 앞에 \ 를 붙여 일반적인 문자로취급. $ 문자 끝부분에 해당문자기 있는지 확인, 플래그 m을 붙여 줄바꿈이 된줄을 시작~끝 으로 해석해서 검색.


console.log(
  str.match(/m$/g)
)
// => null 끝나는 글자가 백틱 앞.

console.log(
  str.match(/m$/gm)
)
// => (2) 각줄에서 찾는 플래그 m추가

console.log(
  str.match(/m$/gmi)
)
// => 플래그 i추가로 대소문자 구분없이 대문자도 찾음.


console.log(
  str.match(/^d/g)
)
// => null 첫글자가 d인 문자열 찾음 백틱 뒤부터.
console.log(
  str.match(/^d/gm)
)
// => 1 찾음 줄바꿈 시작과 긑을 문장으로 인식 플래그 m


// console.log(
//   str.match(/./gm)
// )
//=> 모든 문자를 찾음. 공백포함


console.log(
  str.match(/ht.p/gm)
)
//=> . 부분에 임의의 문자가 있는 문자를 찾음.


console.log(
  str.match(/1234|010/g)
)

// => 1234, 010 을 찾음, 플래그 g를 없에면 먼저 찾아지는 것 하나만 반환


console.log(
  str.match(/https/gm)
)
//=> https, 일치하는 하나만 반환

console.log(
  str.match(/https?/gm)
)
//=> https, http   2개를 찾음, 패턴? 앞의 한글자가 있거나 없거나로 찾음.

console.log(
  str.match(/d{2}/g)
)
// => dd, dd 

console.log(
  str.match(/d{2,}/g)
)
// => dddd

console.log(
  str.match(/d{2,3}/g)
)
// => ddd

console.log(
  str.match(/\w{2,3}/g)
)
// => 2~3글자 단어 모두 찾음 문자 숫자 포함 경계가 없음

console.log(
  str.match(/\b\w{2,3}\b/g)
)
// => 010 com www day  등 반환 경계가 있는 2~3글자

console.log(
  str.match(/[0-9]{2,}/g)
)
// => 0-9 , 모든 숫자중 2글자 이상인 것을 모두 찾음.

// = > 앞뒤 경계가있는 g로 시작되는 2개이상의 63개 문자와 일치.


const h = `   the hello world     !

`

console.log(
  h.match(/\s/g)
)
//=> 모든 공백을 찾는다
console.log(
  h.replace(/\s/g,"")
)
//=> 모든 공백을 없앨수 있다.



console.log(
  str.match(/.{1,}(?=@)/g)
)
//=> dlsduf ; @를 기준으로 1개이상의 임의 문자 일치 패턴앞에 찾을 문자표기
console.log(
  str.match(/(?<=@).{1,}/g)
)
// => gmail.com @를 기준으로 뒤쪽의 1개이상 문자 일치, 패턴뒤에 찾을 문자 표기