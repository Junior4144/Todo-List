
const displayWeek = () =>{

    const list = document.querySelector('.listContainer');

    const sub = document.createElement('div');
    sub.classList.add('subContainer');


    const todayWeek = document.createElement('h1');
    todayWeek.classList.add('todayWeek');
    todayWeek.textContent = 'Week';

    list.appendChild(sub);
    sub.appendChild(todayWeek);
}
export default displayWeek;