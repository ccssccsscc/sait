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
  if ( data.keyCode == 27 ) {
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

  // test it
  let i = 1;
  setInterval(() => {
    showNotification({
      top: 10,
      right: 10,
      html: 'Hello ' + i++,
      className: "welcome"
    });
  }, 2000);
  ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px'
  ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px'
