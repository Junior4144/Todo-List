
const addTask = () => {
    const subContainer = document.querySelector('.subContainer');
    
    const addTaskContainer = document.createElement('div');
    addTaskContainer.classList.add('addTaskContainer');
    addTaskContainer.textContent = '+ add project';


    subContainer.appendChild(addTaskContainer);

}
export default addTask;