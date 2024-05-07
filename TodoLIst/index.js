// 오늘 날짜로 바꾸기
document.querySelector(".date").innerText = new Date().toLocaleDateString();

const reloadCount = () => {
  // 미완료 개수 업데이트
  let count = document.querySelectorAll(".todo-item:not(.done)").length;
  document.querySelector(".count").innerText = count;
};
reloadCount(); // 첫 화면 로딩 시 바로 개수 업데이트를 위해서 함수 실행

const delTodo = (el) => {
  // 투두 삭제 후 개수 업데이트 필요
  el.parentElement.remove();
  reloadCount();
};

const todoDone = (el) => {
  // 투두 완료 후 개수 업데이트 필요
  el.parentElement.classList.toggle("done");
  reloadCount();
};

const addTodo = () => {
  // 투두 추가 후 개수 업데이트 필요, 텍스트박스가 빈칸이면 알림 띄우기
  let text = document.querySelector("#textbox").value;
  if (!text) {
    alert("빈칸입니다");
  } else {
    let todo = document.createElement("div");
    todo.classList.add("todo-item");

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("onclick", "todoDone(this)");

    let button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("onclick", "delTodo(this)");
    button.setAttribute("value", "❌");

    todo.append(checkbox, text, button);

    let todoContent = document.querySelector(".todo-content");
    todoContent.append(todo);

    reloadCount();
  }
};