function addTask(){

    const taskInput =
    document.getElementById("taskInput");
    
    const dateInput =
    document.getElementById("dateInput");
    
    const timeInput =
    document.getElementById("timeInput");
    
    if(taskInput.value.trim()===""){
    alert("Please enter a task");
    return;
    }
    
    const li =
    document.createElement("li");
    
    const taskInfo =
    document.createElement("span");
    
    taskInfo.className="task-info";
    
    taskInfo.innerHTML =
    `${taskInput.value}
    <br>
    📅 ${dateInput.value}
    ⏰ ${timeInput.value}`;
    
    const actions =
    document.createElement("div");
    
    actions.className="actions";
    
    const completeBtn =
    document.createElement("button");
    
    completeBtn.textContent="✅";
    
    completeBtn.onclick=()=>{
    taskInfo.classList.toggle("completed");
    };
    
    const editBtn =
    document.createElement("button");
    
    editBtn.textContent="✏️";
    
    editBtn.onclick=()=>{
    
    const newTask =
    prompt(
    "Edit task:",
    taskInput.value
    );
    
    if(newTask){
    taskInfo.innerHTML=
    `${newTask}
    <br>
    📅 ${dateInput.value}
    ⏰ ${timeInput.value}`;
    }
    
    };
    
    const deleteBtn =
    document.createElement("button");
    
    deleteBtn.textContent="🗑️";
    
    deleteBtn.onclick=()=>{
    li.remove();
    };
    
    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    
    li.appendChild(taskInfo);
    li.appendChild(actions);
    
    document
    .getElementById("taskList")
    .appendChild(li);
    
    taskInput.value="";
    dateInput.value="";
    timeInput.value="";
    }