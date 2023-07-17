
const displayInbox =() =>{
    const list = document.querySelector('.listContainer');

    const sub = document.createElement('div');
    sub.classList.add('subContainer');

    const inboxText = document.createElement('h1');
    inboxText.classList.add('InboxText');
    inboxText.textContent = 'Inbox';

    list.appendChild(sub);
    sub.appendChild(inboxText);

}
export default displayInbox;