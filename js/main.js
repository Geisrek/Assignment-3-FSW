let tasks= localStorage.getItem("tasks");
const add_btn=document.querySelector("#add-btn");
const text_field=document.querySelector("#task-field");

console.log(tasks.tasks)

//localStorage.removeItem("tasks")
//const tasks=['<li class="task flex-items Gap"><h3 class="task-text">Task</h3><h4 class="task-date">11:11:1111</h4><a type="button" class="done-bt" href="" onClick="done()">👍🏼</a><a type="button" class="remove-bt" href="">🗑</a></li>']
function checkArray(){
    if(tasks===null){
        
        tasks=localStorage.setItem("tasks",JSON.stringify({"tasks":[]}))
    }
    else{
        console.log('done')
        
         tasks=JSON.parse(tasks)
         fillTaskList(tasks)
         //tasks.tasks
         console.log(tasks.tasks)
        
    }
    
}

//checkArray()
console.log(tasks)

function fillTaskList(tasks){
    const task_list=document.querySelector('#task-list')
    for (let i=0 ; i<tasks.tasks.length;i++){
        task_list.innerHTML+=tasks.tasks[i]
    }
    //task_list.innerHTML+='<li class="task flex-items Gap"><h3 class="task-text">Task</h3><h4 class="task-date">11:11:1111</h4><a type="button" class="done-bt" href="" onClick="done(this.PannerNode)">👍🏼</a><a type="button" class="remove-bt" href="" onClick="remove(this.PannerNode)">🗑</a></li>'

}
//fillTaskList(tasks)
function checkTextValidation(text){
    return text!=''
}

add_btn.addEventListener('click',function(){
    newText=text_field.value;
    const new_task=document.createElement("li");
    if(checkTextValidation){
        new_task.innerHTML=`<li class="task flex-items Gap"><h3 class="task-text">${newText}</h3><h4 class="task-date">${new Date()}</h4><a type="button" class="done-bt" href="" onClick="done()">👍🏼</a><a type="button" class="remove-bt" href="">🗑</a></li>`;
        
        document.querySelector("#task-list").appendChild(new_task)
    }
    else{
        alert("Empty text is not valid!!");
    }

})
function done(item){
   alert('done')
}
function remove(item){

}
//fillTaskList(tasks)
/** <li class="task flex-items Gap">
            <h3 class="task-text">Task</h3>
            <h4 class="task-date">11:11:1111</h4>
            <a type="button" class="done-bt" href="">👍🏼</a>
            <a type="button" class="remove-bt" href="">🗑</a></li>*/


