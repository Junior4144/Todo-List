
const displayConfigDisplay = () => {

    const addTaskContainer = document.querySelector('.addTaskContainer');
    //add the input
    //add "add"
    //add "cance;"
    const input = document.createElement('INPUT');
    input.setAttribute('type', 'text');
    input.classList.add('input');

    const add = document.createElement('div');
    add.classList.add('add');
    add.textContent = 'add';
    
    const cancel = document.createElement('div');
    cancel.classList.add('cancel');
    cancel.textContent = 'cancel';
    
    addTaskContainer.appendChild(input);
    addTaskContainer.appendChild(add);
    addTaskContainer.appendChild(cancel);
    
}
export default displayConfigDisplay;