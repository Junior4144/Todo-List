
const displayToday = () => {

    const list = document.querySelector('.listContainer');

    const sub = document.createElement('div');
    sub.classList.add('subContainer');


    const todayText = document.createElement('h1');
    todayText.classList.add('todayText');
    todayText.textContent = 'Today';

    list.appendChild(sub);
    sub.appendChild(todayText);

}
export default displayToday;