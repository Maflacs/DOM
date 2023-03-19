const ul = document.querySelector("ul");

const button = document.querySelector("button");

const input = document.querySelector("input");

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const li = document.createElement("li");

    const span = document.createElement("span");

    const delButton = document.createElement("button");

    li.appendChild(span);
    span.textContent = myItem;

    li.appendChild(delButton);
    delButton.textContent = "Delete";

    ul.appendChild(li);

    delButton.addEventListener('click', () => {
        ul.removeChild(li);
      });

    input.focus();

});



