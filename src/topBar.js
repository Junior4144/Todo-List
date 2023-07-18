import displayInbox from "./inbox";
import displayToday from "./today";
import displayWeek from './week'
import addTask from './addTask'

const topBar = () => {

    const inbox = document.querySelector('.inbox');
    inbox.addEventListener('click', function() {
        deleteAll();
        displayInbox();
        addTask();
    })
    
    const today = document.querySelector('.today');
    today.addEventListener('click', function(){
        deleteAll();
        displayToday();
        addTask();
    })
    const week = document.querySelector('.week');
    week.addEventListener('click', function(){
        deleteAll();
        displayWeek();
        addTask();
    })
    inbox.addEventListener('mouseover', function() {
        inbox.style.backgroundColor = '';
    })
    inbox.addEventListener('mouseout', function() {
        inbox.style.backgroundColor = '';
    })

    today.addEventListener('mouseover', function() {
        today.style.backgroundColor = '';
    })
    today.addEventListener('mouseout', function() {
        today.style.backgroundColor = '';
    })

    week.addEventListener('mouseover', function() {
        week.style.backgroundColor = '';
    })
    week.addEventListener('mouseout', function() {
        inbox.style.backgroundColor = '';
    })
    

    

}
function deleteAll(){
    const sub = document.querySelector('.subContainer');
    const list = document.querySelector('.listContainer');

    if(sub){
        list.removeChild(sub);
    }
    
}
export default topBar;