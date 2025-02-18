let todos = [
    {id:1, title:"putzen", isDone:false},
    {id:2, title:"lernen", isDone:true},
    {id:3, title:"einkaufen", isDone:false},
    {id:4, title:"kochen", isDone:false}
]

function printTasks()
{
    let html = "";
    todos.forEach(element => {
    
        html += "<div>" + element.title + " - " + element.isDone +  "</div>"    
    });
    
    document.getElementById("todos").innerHTML = html;  
}

