const tasks= localStorage.getItem("tasks");
const add_btn=document.querySelector("#add-btn");
const text_field=document.querySelector("#task-field");


//const tasks=['<li class="task flex-items Gap"><h3 class="task-text">Task</h3><h4 class="task-date">11:11:1111</h4><a type="button" class="done-bt" href="" onClick="done()">👍🏼</a><a type="button" class="remove-bt" href="">🗑</a></li>']
function checkArray(tasks){
    if(tasks===null){
        console.log("fytf")
        tasks=localStorage.setItem("tasks",JSON.stringify('{"tasks":[]}'))
    }
    
}

checkArray(tasks)
function fillTaskList(tasks){
    const task_list=document.querySelector('#task-list')
    for (let i=0 ; i<tasks.length;i++){
        task_list.innerHTML+=tasks[i]
    }
    //task_list.innerHTML+='<li class="task flex-items Gap"><h3 class="task-text">Task</h3><h4 class="task-date">11:11:1111</h4><a type="button" class="done-bt" href="" onClick="done(this.PannerNode)">👍🏼</a><a type="button" class="remove-bt" href="" onClick="remove(this.PannerNode)">🗑</a></li>'

}
fillTaskList(tasks)

function done(){
   alert('done')
}
//fillTaskList(tasks)
/** <li class="task flex-items Gap">
            <h3 class="task-text">Task</h3>
            <h4 class="task-date">11:11:1111</h4>
            <a type="button" class="done-bt" href="">👍🏼</a>
            <a type="button" class="remove-bt" href="">🗑</a></li>*/


