// 1. para:x retrun: 넣으면 hello x님
// 2. para:x retrun: 넣으면 ~~핑~
// 3. para:x retrun: ~~이라니 러키비키 잖아
// 4. 두 숫자를 주면 제곱을 돌려주는 함수
// 5. 년도, 월, 일 넣으면 오늘은 ~~년도, ~월 ~일
// 6. mbti (ei, sn, tf, jp)를 넣으면 외향적/내향적. 감각적/직관적. 이성적/감성적. 계획적/즉흥적
// 7. zodiac 태어난년도를 넣으면 따돌려주기

function hello(x) {
  return `hello ${x}님`;
}
const x = prompt(`안녕하세요`);
console.log(hello(x));
function ping(p) {
  return `${p}핑`;
}
const p = prompt(`무슨핑`);
console.log();

function luck(x) {
  return `${x} 이라니 러키비키 `;
}

function number(x, y) {
  return x ** y;
}

function today(year, month, day) {
  return `${year}년 ${month}월 ${day}일`;
}

function mbti(a, b, c, d) {
  const mbtimap = {
    e: "외향적",
    i: "내향적",
    s: "감각적",
    n: "직관적",
    t: "이성적",
    f: "감성적",
    j: "계획적",
    p: "즉흥적",
  };
  return `${mbtimap[a]},${mbtimap[b]},${mbtimap[c]},${mbtimap[d]}이시군요`;
}

function zodiac(year) {
  const animal = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랑이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양",
  };
  return `${animal[target]}띠~`;
}
