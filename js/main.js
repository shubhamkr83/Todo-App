// show task function call
showTask();
let todo_input = document.getElementById("todo_input");
let add_btn = document.getElementById("add_btn");

add_btn.addEventListener("click", function () {
    todo_input_val = todo_input.value;
    if (todo_input_val.trim() != 0) {
        let webtask = localStorage.getItem("localtask");
        if (webtask == null) {
            taskObj = [];
        }
        else {
            taskObj = JSON.parse(webtask);
        }
        taskObj.push({ 'task_name': todo_input_val, 'completeStatus': false });
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        todo_input.value = '';
    }
    showTask();
})

// showTask
function showTask() {
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webtask);
    }
    let html = '';
    let task_list = document.getElementById("task_list");
    taskObj.forEach((item, index) => {

        if (item.completeStatus == true) {
            taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
        } else {
            taskCompleteValue = `<td>${item.task_name}</td>`;
        }
        html += `
        <tr id="list">
            <th class="s_no" >${index + 1}  <input type="checkbox" ></th>${taskCompleteValue}
            <td><button onclick="editTask(${index})" class="edit_btn">Edit</button></td>
            <td><button onclick="deleteItem(${index})" class="danger_btn">Delete</button></td>
        </tr>
    `;
    });
    task_list.innerHTML = html;
}


// editTask
function editTask(index) {
    let save_index = document.getElementById("save_index");
    let add_btn = document.getElementById("add_btn");
    let save_btn = document.getElementById("save_btn");
    save_index.value = index;
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);

    todo_input.value = taskObj[index]['task_name'];
    add_btn.style.display = "none";
    save_btn.style.display = "block";
}

// saveTask
let save_btn = document.getElementById("save_btn");
save_btn.addEventListener("click", function () {
    let add_btn = document.getElementById("add_btn");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    let save_index = document.getElementById("save_index").value;

    for (keys in taskObj[save_index]) {
        if (keys == 'task_name') {
            taskObj[save_index].task_name = todo_input.value;
        }
    }
    save_btn.style.display = "none";
    add_btn.style.display = "block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    todo_input.value = '';
    showTask();
})

// deleteItem
function deleteItem(index) {
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showTask();
}


// deleteAll
let delete_all_btn = document.getElementById("delete_all_btn");
delete_all_btn.addEventListener("click", function () {
    let save_btn = document.getElementById("save_btn");
    let add_btn = document.getElementById("add_btn");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    if (webtask == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webtask);
        taskObj = [];
    }
    save_btn.style.display = "none";
    add_btn.style.display = "block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    todo_input.value = '';
    showTask();

})

//complete task
function completeTask(index) {
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj[index] = index;
    let task_list = document.getElementById("task_list");
    task_list.addEventListener("click", function (e) {
        console.log(task_list)
    })
    taskObj[mytargetid] = { 'task_name': taskValue, 'completeStatus': true };
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showTask();
} 
