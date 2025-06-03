var taskInput = document.getElementById("taskInput");
var dateInput = document.getElementById("dateInput");
var taskList = document.getElementById("taskList");
var addTaskButton = document.getElementById("addTask");
var clearTaskButton = document.getElementById("clearTask");
var toggleThemeButton = document.getElementById("toggleTheme");
var mainContainer = document.getElementById("mainContainer");


addTaskButton.onclick = function() {
    const taskText = taskInput.value.trim();
    const dateText = dateInput.value;

    if (taskText === '' || dateText === '') {
        alert("Harap isi kegiatan dan tanggal!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText} (${dateText})</span>
        <div>
            <button onclick="markDone(this)">✔</button>
            <button onclick="deleteTask(this)">❌</button>
        </div>`;
    taskList.appendChild(li);

    taskInput.value = '';
    dateInput.value = '';
};

function markDone(button) {
    const li = button.closest("li");
    li.style.textDecoration = "line-through";
    button.disabled = true;
}

function deleteTask(button) {
    const li = button.closest("li");
    li.remove();
}

clearTaskButton.onclick = function() {
    taskList.innerHTML = '';
};

toggleThemeButton.onclick = function() {
    if (mainContainer.classList.contains("dark-theme")) {
        mainContainer.classList.remove("dark-theme");
        toggleThemeButton.textContent = "Ubah Tema";
    } else {
        mainContainer.classList.add("dark-theme");
        toggleThemeButton.textContent = "Kembali ke Tema Awal";
    }
};
