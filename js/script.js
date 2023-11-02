const taskList = document.getElementById("task-list");

saveData = () => {
    console.log("Dados salvos!");
    localStorage.setItem("data", taskList.innerHTML)
}

loadData = () => {
    console.log("Dados carregados!")
    taskList.innerHTML = localStorage.getItem("data");

    const inputsCheckbox = document.getElementsByName("checkbox-input");
    const inputsCheckboxArr = [...inputsCheckbox];

    inputsCheckboxArr.forEach((el) => {
        if (el.nextSibling.className == "checked") {
            el.checked = true;
        }
    });

}

addEvents = () => {

    console.log("EventListener's adicionados!");

    // Adicionando EventListener aos elementos "button":
    const buttons = document.getElementsByClassName("delete-task");
    const buttonsArr = [...buttons];

    buttonsArr.forEach((el) => addOnClick(el))

    function addOnClick(el) {
        el.addEventListener("click", () => {
            taskList.removeChild(el.parentNode);
            saveData();
        })
    }

    // Adicionando EventListener aos elementos "input":
    const inputsCheckbox = document.getElementsByName("checkbox-input");
    const inputsCheckboxArr = [...inputsCheckbox];

    inputsCheckboxArr.forEach((el) => addChecked(el))

    function addChecked(el) {
        el.addEventListener("change", () => {

            if (el.checked == true){
                el.nextSibling.className = "checked"
                saveData();
            } else {
                el.nextSibling.className = "non-checked"
                saveData();
            }
        })
    }

}

addTask = () => {

    // Extraindo texto digitado no Input do Usuário:
    const inputBox = document.getElementById("input-box");
    const text = inputBox.value;

    if (!text) {
        alert("You need to write something.")
    }
    else {

        // Criando elemento "li":
        const listItem = document.createElement("li");
        listItem.className = "task";

        // Criando elemento "div" child da "li":
        const divTaskCheckbox = document.createElement("div");
        divTaskCheckbox.className = "task-checkbox";

        // Criando elemento "input" child da "div" divTaskCheckbox:
        const inputCheckbox = document.createElement("input");
        inputCheckbox.type = "checkbox";
        inputCheckbox.name = "checkbox-input";
        inputCheckbox.id = `#${Math.round(Math.random() * Math.pow(10, 9))}`;

        // Criando elemento "label" child da "div" divTaskCheckbox:
        const labelCheckbox = document.createElement("label");
        labelCheckbox.className = "non-checked"
        labelCheckbox.htmlFor = inputCheckbox.id;
        labelCheckbox.innerHTML = text;

        // Adicionando os elementos "input" e "label" à "div" divTaskCheckbox:
        divTaskCheckbox.appendChild(inputCheckbox);
        divTaskCheckbox.appendChild(labelCheckbox);

        // Adicionando a "div" divTaskCheckbox ao elemento "li":
        listItem.appendChild(divTaskCheckbox);

        // Criando elemento "button" child da "li":
        const delButton = document.createElement("button");
        delButton.className = "delete-task"
        delButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`

        // Adicionando elemento "button" ao "li";
        listItem.appendChild(delButton);

        // Adicionando "li" à taskList:
        taskList.appendChild(listItem);

        inputBox.value = "";

        saveData();
        addEvents();

    }
    
}

loadData();

window.onload = () => {
    addEvents();
}