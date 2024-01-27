const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});








var chatbox = document.querySelector('.chatbox');
var input = chatbox.querySelector('input[type=text]');
var button = chatbox.querySelector('button');
button.addEventListener('click', function() {
	var message = input.value;
	input.value = '';
	var container = document.createElement('div');
	container.classList.add('chatbox');
	var img = document.createElement('img');
	img.src = '../images/icons8-utilisateur-32.png';
	img.alt = 'Avatar';
	img.style.width = '100%';
	container.appendChild(img);
	var p = document.createElement('p');
	p.textContent = message;
	container.appendChild(p);
	var span = document.createElement('span');
	span.classList.add('time-right');
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	var time = hours + ':' + minutes;
	span.textContent = time;
	container.appendChild(span);
	chatbox.parentNode.insertBefore(container, chatbox.nextSibling);
});
