let ctr = 1;

function addTodo() {
  const enter_value = document.querySelector("#todo-input");
  const value = enter_value.value;

  const element = document.createElement("li"); //  Create a new <li> for the todo item
  const id = "todo-" + ctr;
  element.setAttribute("id", id);

  //  Add content to the new list item
  element.innerHTML = "<span>" + value + "</span> <button class='delete-btn' onclick='Delete(" + ctr + ")'>✖</button>";

  const parentEL = document.querySelector("#todo-list"); //  Append to the UL, not the body
  parentEL.appendChild(element);

  ctr = ctr + 1;
}

function Delete(index) {
  const eLement = document.getElementById("todo-" + index);
  if (eLement) {
    eLement.remove();
  }
}
