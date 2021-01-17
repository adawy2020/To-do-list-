let input = document.querySelector(".todo-addtask");
let add = document.querySelector(".add");
let warn = document.querySelector(".warn");
let todo = document.querySelector(".todo-add");
let comResults = document.querySelector(".task-com");
let notComResults = document.querySelector(".task-noncom");



add.addEventListener("click",function(e){
    e.preventDefault()

    if(input.value == ""){
        warnMsg();

    }else {
        addTask();
    }
})
function addTask(){
    let li = document.createElement("li");
    let check = document.createElement("button");
    let clear = document.createElement("button");
    let taskCon = document.createElement("label");
    taskCon.innerHTML = input.value;
    clear.innerHTML = "Clear";
    check.innerHTML="Complete";
    li.appendChild(taskCon);
    li.appendChild(clear);
    li.appendChild(check);
    notComResults.appendChild(li);
    li.classList.add("taskk");
    clear.classList.add("clear");
    taskCon.classList.add("task-content");
    check.classList.add("check-complete");
    warn.style.display = "none";
    clear.addEventListener("click",function(){
     let parent = this.parentNode;
     parent.remove();
    })
    check.addEventListener("click",function(){
        let parent = this.parentNode;
        parent.remove();
        comResults.appendChild(parent);
        check.remove();
        clear.style.marginLeft="110px";
       })

    
    }
function warnMsg(){
    warn.style.display = "block";
} 