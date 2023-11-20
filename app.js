var value=0;



let textInputField = document.querySelector('#text-input-field');
let addButton = document.querySelector('#add-button');
let todosContainer = document.querySelector('.todos-container');

addButton.addEventListener('click',button)
 function button(){
    if (textInputField.value.trim().length == '' ){
        return;
 
    }

    let todoItemContainer = document.createElement('div');
    todoItemContainer.classList.toggle('todo-item-container');

    todosContainer.appendChild(todoItemContainer);
 
     if(value==0){
        var  todoText = document.createElement('p');
        todoText.id = 'todo-text';
        todoText.innerText = textInputField.value;
         todoItemContainer.appendChild(todoText);
     

///----------------------------------Delete Button----------------------------

    let deleteButton = document.createElement('button');
    deleteButton.id = 'delete-button';


    let  deleteImage = document.createElement('img');
    deleteImage.src = 'delete.svg';

    deleteButton.appendChild(deleteImage);
    todoItemContainer.appendChild(deleteButton);


    deleteButton.addEventListener('click',del) 
        function del(){
        if(confirm("do you sure delete the item")){
          const parent = deleteButton.parentElement;
          parent.parentElement.removeChild(parent);
       }
    }
      // console.log(parent);
//-----------------------------------------Edit button-------------------------
    
        const editButton = document.createElement('button');
        editButton.id = 'edit-button';

   
        const editImage = document.createElement('img');
        editImage.src = 'edit.svg';
        editButton.appendChild(editImage);
        todoItemContainer.appendChild(editButton);

       editButton.addEventListener("click",edit)

       function edit() {
        value=editButton.parentElement.firstChild;
        console.log(value);
        textInputField.value = todoText.innerText;

    }
    textInputField.value = "";
  }
      else{
          value.innerText=textInputField.value;
          textInputField.value = "";
          value=0
        }
    

    console.log(value.innerText);
    console.log(textInputField);
 }

 

   

      



 

   

      