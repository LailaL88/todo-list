
function onPageLoaded() {
    const input = document.querySelector("input[type='text']");
    const ul = document.querySelector("ul");
    const saveButton = document.querySelector("button.save");

    function createTodo() {

        const li = document.createElement("li");
        
        const textSpan = document.createElement("span");
        textSpan.classList.add("listitem");
        
        const newTodo = input.value;
        textSpan.append(newTodo);


        const deleteBtn = document.createElement("span");
        deleteBtn.classList.add("todo-trash");
        const icon = document.createElement("i");
        icon.classList.add("fas", "fa-eraser");
        deleteBtn.appendChild(icon);

        ul.appendChild(li).append(textSpan, deleteBtn);
        input.value = "";
        deleteButton(deleteBtn);
        clickLi(li);
    }

    saveButton.addEventListener("click", () => {
        localStorage.setItem("todos", ul.innerHTML);
    });

    function loadTodos() {
        const data = localStorage.getItem("todos");
        if (data) {
            ul.innerHTML = data;
        }
        const deleteButtons = document.querySelectorAll("span.todo-trash");
        for (const button of deleteButtons) {
            deleteButton(button);
        }

        let lis = document.querySelectorAll("span.listitem");

        for (const item of lis) {
            clickLi(item);
        }

    }

    loadTodos();

    function deleteButton(element) {
        element.addEventListener("click", (event) => {
            element.parentElement.remove();
            event.stopPropagation();
        });
    }

    function clickLi(element) {
        element.addEventListener("click", () => {
            element.classList.add("lineThrough");
        })
    }

    input.addEventListener("keypress", (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which == keyEnter) {
            createTodo();
        }
    });
}

document.addEventListener("DOMContentLoaded", onPageLoaded);

function showTips() {
    document.getElementById("tip").style.display = "block";
}

function hideTips() {
    document.getElementById("tip").style.display = "none";
}

function clearList() {
    var clear = document.getElementById("list");
    clear.innerHTML = "";
}


