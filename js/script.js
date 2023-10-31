// Localiza o elemento "ul" referente a lista de Tasks:
const taskList = document.getElementById("task-list");

const addTask = () => {

    // Extrai o Texto do Input-Box:
    const inputBox = document.getElementById("input-box");
    const text = inputBox.value;

    if (!text) {
        alert("Please, write something.")
    } else {

        inputBox.value = "";

        // List Item:
        const liElement = document.createElement("li");
        liElement.className = "task";

        // Conteúdo do List Item:

        // div "Task Checkbox"
        const taskCheckbox = document.createElement("div");
        taskCheckbox.className = "task-checkbox";

        // checkbox input
        const inputCheckbox = document.createElement("input");
        inputCheckbox.type = "checkbox";
        inputCheckbox.id = `#${Math.round(Math.random() * Math.pow(10,9))}`;

        // label
        const labelInputCheckbox = document.createElement("label");
        labelInputCheckbox.htmlFor = inputCheckbox.id;
        labelInputCheckbox.innerHTML = text;
        labelInputCheckbox.className = "non-checked";
    
        // Adiciona o checkbox input e a label na div "Task Checkbox"
        taskCheckbox.appendChild(inputCheckbox);
        taskCheckbox.appendChild(labelInputCheckbox);

        // Adiciona a div "taskCheckBox" ao li:
        liElement.appendChild(taskCheckbox);

        // button
        const button = document.createElement("button");
        button.className = "delete-task";
        button.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        button.onclick = () => {
            parentEl = button.parentNode;
            taskList.removeChild(parentEl);
        }

        // Adiciona button ao li:
        liElement.appendChild(button);

        // Adiciona o li no TaskList:
        taskList.appendChild(liElement);

        // Adiciona a classe "checked" quando a Task for marcada como concluída:

        inputCheckbox.addEventListener("change", () => {
            if (inputCheckbox.checked) {
                labelInputCheckbox.className = "checked";
            } else {
                labelInputCheckbox.className = "non-checked";
            }
        })

    }

}