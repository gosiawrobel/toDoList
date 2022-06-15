const $toDo = document.getElementById("toDo");
const $submitBtn = document.getElementById("submitBtn");
const $toDoList = document.getElementById("toDoList");

let toDoes = [];

function onSubmit() {
  if ($toDo.value) {
    let toDoObject = {
      text: $toDo.value,
      isDone: false,
      date: Date(),
    };
    $toDo.value = "";
    toDoes.push(toDoObject);
    displayToDoes();
  }
}

$submitBtn.addEventListener("click", onSubmit);

function toDoItem(task, id) {
  return `
  <li class="${task.isDone ? "doneTask" : "dueTask"}">
    My task: ${task.text}
    Date: ${task.date}
    <button id="doneBtn${id}">Done</button>
    <button id="ResetBtn${id}">Reset</button>
  </li>`;
}

function displayToDoes() {
  let innerHtml = "";
  for (let i = 0; i < toDoes.length; i++) {
    innerHtml += toDoItem(toDoes[i], i);
  }
  $toDoList.innerHTML = innerHtml;
  for (let i = 0; i < toDoes.length; i++) {
    let doneBTN = document.getElementById(`doneBtn${i}`);
    doneBTN.addEventListener("click", () => {
      toDoes[i].isDone = true;
      displayToDoes();
    });
  }
}
