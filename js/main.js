let tasks= localStorage.getItem("tasks");
const add_btn=document.querySelector("#add-btn");
const text_field=document.querySelector("#task-field");


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



function fillTaskList(tasks){
    const task_list=document.querySelector('#task-list')
    for (let i=0 ; i<tasks.tasks.length;i++){
        task_list.innerHTML+=tasks.tasks[i]
    }
    
}
//fillTaskList(tasks)
function checkTextValidation(text){
    return text!=''
}
this.PannerNode
add_btn.addEventListener('click',function(){
    newText=text_field.value;
    text_field.value=''
    const new_task=document.createElement("li");
    
    if(checkTextValidation){
        new_task.innerHTML=`<li class="task flex-items Gap"><h3 class="task-text">${newText}</h3><h4 class="task-date">${new Date()}</h4><button type="button" class="done-bt"  onClick="done(this.parentNode)">👍🏼</button><button type="button" onClick="remove(this.parentNode)" class="remove-bt" >🗑</button></li>`;
        
        document.querySelector("#task-list").appendChild(new_task)
    }
    else{
        alert("Empty text is not valid!!");
    }

})
function done(item){
    item.style.textDecoration="line-through"
}
function remove(item){
   
item.remove();
}



