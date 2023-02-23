var arr = ["0번인덱스", "1번인덱스", "2번인덱스"];
console.log("arr.length : " + arr.length);
console.log(arr);
//array.push : 반환값 → push후의 배열의 길이 return
arr.push("push로 추가한 값")
console.log("====arr.push()====");
console.log(arr);
//배열의 가장 마지막요소 제거 : pop()
arr.pop();
console.log("====arr.pop()====");
console.log(arr);
//배열의 첫 요소 제거 : shift()
arr.shift();
console.log("====arr.shift()====");
console.log(arr);
//배열의 맨 앞에 하나이상의 요소 추가 : unshift()
arr.unshift("unshift로 추가한 값1", "unshift로 추가한 값2");
console.log("====arr.unshift()==== ");
console.log(arr);

//특수문자로 배열의 요소를 이은 값을 리턴 : arr.join(' + ')
console.log(arr.join(' + '));

//arr.slice(x,y) : x이상 y미만을 잘라내서 그 값을 리턴
//y가 없으면 x부터 끝까지
console.log("====arr.slice(1,2)====");
console.log(arr.slice(1,2));
console.log("====arr.slice(2)====");
console.log(arr.slice(2));

//arr.toString()
console.log("====arr.toString()====");
console.log(arr.toString());