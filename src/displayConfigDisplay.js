

const displayConfigDisplay = () => {

    const subContainer = document.querySelector('.subContainer');

    const addTaskContainer = document.querySelector('.addTaskContainer');
    subContainer.removeChild(addTaskContainer);

    const displayConfig = document.createElement('div');
    displayConfig.classList.add('configInfo');

    subContainer.appendChild(displayConfig);

    //add the input
    //add "add"
    //add "cance;"
    //queryselect input, get the value after i click add
    const input = document.createElement('INPUT');
    input.setAttribute('type', 'txt');
    input.classList.add('inputA');

    const add = document.createElement('button');
    add.classList.add('add');
    add.textContent = 'add';
    
    const cancel = document.createElement('button');
    cancel.classList.add('cancel');
    cancel.textContent = 'cancel';
    
    displayConfig.appendChild(input);
    displayConfig.appendChild(add);
    displayConfig.appendChild(cancel);

const addButton = document.querySelector('.add');

addButton.addEventListener('click', function() {
    const textInfo = addButtonF();
    displayTodoList(textInfo);
});
    
}



function addButtonF() {
const inputA = document.querySelector('.inputA');
const textInfo = inputA.value;

console.log(textInfo);

const configInfo = document.querySelector('.configInfo');
const sub = document.querySelector('.subContainer');

sub.removeChild(configInfo);
    return textInfo;
    
}
function displayTodoList(textInfo){
    const subContainer = document.querySelector('.subContainer');
    const configInfo = document.querySelector('.configInfo');
    const todoList = document.querySelector('.todoList');

    
    if(!todoList){
        const todoList = document.createElement('div');
        todoList.classList.add('todoList');
        subContainer.appendChild(todoList);
       
        
    }
    

    

}

export default displayConfigDisplay;
