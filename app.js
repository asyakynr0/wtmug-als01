const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    const li = document.createElement("li");
    li.className = "task";

    const span = document.createElement("span");
    span.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil";
    deleteButton.className = "delete-button";

    span.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});


if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("service-worker.js")
            .then(() => {
                console.log("Service Worker kayıt edildi.");
            })
            .catch((error) => {
                console.error(
                    "Service Worker kayıt hatası:",
                    error
                );
            });

    });

}
