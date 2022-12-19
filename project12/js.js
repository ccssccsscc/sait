let hrefs = document.querySelectorAll('a');
for (let l of hrefs) {
    let href = l.getAttribute('href');
    if (!href) continue; // нет атрибута
    l.style.color = 'red';
}
let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
  let data = prompt("Plese write a list", "");

  if (data==" ") {
    break;
  }
  if (data.keyCode == 27 ) {
    break;
}
  let li = document.createElement('li');
  li.textContent = data;
  ul.append(li);
}
function showNotification({top = 0, right = 0, className, html}) {

  let notification = document.createElement('div');
  notification.className = "notification";
  if (className) {
    notification.classList.add(className);
  }

  notification.style.top = top + 'px';
  notification.style.right = right + 'px';

  notification.innerHTML = html;
  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
}
let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: 'Go Home its no your time ' + i++,
    className: "welcome"
  });
}, 2000);

const area=document.querySelector(".area");
const per=area.querySelector('img');
per.style.top=Math.round(area.clientHeight/2 - per.offsetHeight/2) + "px";
per.style.left=Math.round(area.clientWidth/2 - per.offsetWidth/2) + "px";
const clickX=document.querySelector('.clickX').querySelector('span');
const clickY=document.querySelector('.clickY').querySelector('span');
area.onclick = function(click){
    clickX.textContent=click.clientX;
    clickY.textContent=click.clientY;
}

const notif = document.querySelector('.notifs');
const notifBtn = notif.querySelector('.notif__btn');
const notifInner = notif.querySelector('.notif__inner');
const notifCounter = notif.querySelector('.notif__counter');
const notifArr = [
    'закрой',
    'не закрывай',
    'закрой сайт',
    'пока',
    'до свидание'
];

let numberNotif = 0;
let counter = 0;

function createNotif() {
    let element = document.createElement('div');
    element.classList.add('notif__item');

    if (numberNotif < notifArr.length) {
        element.textContent = notifArr[numberNotif];
        numberNotif++;
        counter++;
    } else {
        numberNotif = 0;
        element.textContent = notifArr[numberNotif];
        numberNotif++;
        counter++;
    }

    element.style=`
    position: relative;
    width: 10%;
    padding: 10px 20px;
    display: inline-block;
    border: 1px solid white;
    background: bisque;
    color:white;
    margin-bottom: 5px;
    `;

    notifInner.append(element);

    let closeTab = document.createElement('i');
    closeTab.className = 'fa-solid fa-xmark';

    closeTab.style=`
    position: absolute;
    right: 10px;
    font-size: 15px;
    top: 3px;
    cursor: pointer;
    `;

    element.append(closeTab);

    notifCounter.textContent = counter;

}

let timerId = setInterval(createNotif, 3000);

notifBtn.addEventListener('click', () => {
    clearInterval(timerId);
    setTimeout(function() {
        timerId = setInterval(createNotif, 3000);
    }, 10000);
});

notifInner.onclick = function(event) {
    if (!event.target.classList.contains('fa-xmark')) return;

    let notif = event.target.closest('.notif__item');
    notif.remove();

    counter--;
    notifCounter.textContent=counter;
};





