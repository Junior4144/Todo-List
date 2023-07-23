import displayConfigDisplay from './displayConfigDisplay'

const addTask = () => {
    const subContainer = document.querySelector('.subContainer');
    
    const addTaskContainer = document.createElement('div');
    addTaskContainer.classList.add('addTaskContainer');
    
    const addTaskText = document.createElement('div');
    addTaskText.textContent = '+ add project';

    addTaskContainer.appendChild(addTaskText);
 

    subContainer.appendChild(addTaskContainer);
    //change the div to delete itself and add a new div that will be the input structure
    addTaskContainer.addEventListener('click', function() {
        
        displayConfigDisplay();
    });


}





export default addTask;