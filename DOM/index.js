// DOM 요소 생성
let title = document.createElement("title");
title.append("My first web page");
document.head.append(title);

let h1 = document.createElement("h1");
h1.append("Hello, world!");
let p = document.createElement("p");
p.append("How are you?");
document.body.append(h1, p);

// DOM 요소 수정
title.innerText = "Hello World";

let el = document.createElement("input");
el.setAttribute("value", "Hello World");
el.classList.add("test-class-name");
document.body.append(el);
el.classList.toggle("test-class-name");

// DOM 요소 삭제
el.parentElement.remove();