//selectors
var todoInput = document.getElementById("todo-input");
var todoList = document.getElementById("todo-list");
var btn = document.getElementById("helo");
var filter= document.querySelector(".filter-todo");
// event listeners

filter.addEventListener('click',filterTodo);
btn.addEventListener('click',function(event){
    event.preventDefault();
   var todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
   var todoItem = document.createElement('li');
   todoItem.innerText=todoInput.value;
   todoItem.classList.add('todo-item');
   todoDiv.appendChild(todoItem);

   var completedButton = document.createElement('button');
   completedButton.classList.add('complete-btn');
   completedButton.innerHTML='<i class="fas fa-check"></i> ';
   todoDiv.appendChild(completedButton);
   completedButton.addEventListener('click',function(){
       var x= completedButton.parentElement;
       x.classList.toggle('completed');
       
   })

   var trashButton = document.createElement('button');
   trashButton.innerHTML='<i class = "fas fa-trash"></i>';
   trashButton.classList.add('trash-btn');
   
   todoDiv.appendChild(trashButton);

   trashButton.addEventListener('click',function(){
       var x=trashButton.parentElement;
       x.classList.add("fall");
       setInterval(function(){
         x.remove();
       },300);
   })
    
   todoList.appendChild(todoDiv);
  //clear input value
  todoInput.value="";
});
 
/*todoList.addEventListener('click',deletefxn);
function deletefxn(e){
    var x= e.target;
    if(x.classList[0]==='trash-btn')
    var y = x.parentElement;
      y.remove();
}*/
function filterTodo(e){
  var todos = todoList.childNodes;
 // console.log(todos[2].classList);
  //console.log(e.target.value);
    switch(e.target.value){
      case "all":
        for(var i=1;i<todos.length;i++)
          todos[i].style.display="flex";
        break;
        case "completed":
          for(var i=1;i<todos.length;i++){
            if(todos[i].classList.contains('completed'))
            todos[i].style.display='flex';
            else
            todos[i].style.display="none";
          }
          break;
          case "Remaining":
            console.log(todos[1].classList);
            for(var i=1;i<todos.length;i++){
            if(!(todos[i].classList.contains('completed'))){
              todos[i].style.display='flex';
            }
            else
            {
              todos[i].style.display='none';
            }
          }

    }
}
