// if (localStorage.length === 0) {
//     dBtn.hidden = true
//     cBtn.hidden = true
//     show.innerHTML = '<h3>No Tasks yet!</h3>'
// }
// if (localStorage.length != 0) {
//     dBtn.hidden = false
//     cBtn.hidden = false
// }
function addTask() {
    if (taskInput1.value == "" || taskInput2.value == "") return 0
    else {
        localStorage.setItem(taskInput1.value, taskInput2.value)
        // todoList.innerHTML += `<div><p><b>${localStorage.length} : ${taskInput1.value}</b> : ${localStorage.getItem(taskInput1.value)}</p></div>`
        sonload()
        taskInput1.value = ""
        taskInput2.value = ""
        // dBtn.hidden = false
        // cBtn.hidden = false
        show.innerHTML = '<h3>Tasks</h3>'
    }
}
window.onload = () => {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        todoList.innerHTML += `<div><p><b>${i + 1} : ${localStorage.key(i)}</b> : ${localStorage.getItem(key)}</p></div>`
        // sonload()
    }
}
function deleteTask() {
    // dBtn.onclick = () => {
    if (taskInput1.value == "") return 0
    else {
        localStorage.removeItem(taskInput1.value)
        const taskDivs = document.querySelectorAll("#todoList > div");
        taskDivs.forEach(div => {
            const boldText = div.querySelector("p > b")?.textContent;
            if (boldText && boldText.includes(taskInput1.value)) {
                div.remove();
            }
        })
        taskInput1.value = ""
        sonload()
    }
    // }
}
function clearTask() {
    // cBtn.onclick = () => {
    localStorage.clear();
    todoList.innerHTML = ''
    show.innerHTML = '<h3>No Tasks yet!</h3>'
    // cBtn.hidden = true
    // dBtn.hidden = true
    taskInput1.value = ''
}
// }
function sonload() {
    todoList.innerHTML = ''
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        todoList.innerHTML += `<div><p><b>${i + 1} : ${localStorage.key(i)}</b> : ${localStorage.getItem(key)}</p></div>`
    }
}