function cicrle() {
  let amount = 15;
  let body = document.querySelector('body');
  let i = 0;
  while (i < amount) {
    let element = document.createElement('i');
    let posX = Math.floor(Math.random() * window.innerWidth);
    let posY = Math.floor(Math.random() * window.innerHeight);
    let delay = Math.random() * -30;
    let duration = Math.random() * 10;

    let size = Math.random() * 200;
    element.style.width = 50 + size + 'px';
    element.style.height = 50 + size + 'px';
    element.style.left = posX + 'px';
    element.style.top = posY + 'px';
    element.style.animationDelay = delay + 's';
    element.style.animationDuration = 15 + duration + 's';
    body.appendChild(element);
    element.style.boxShadow = '0 30px 50px #0002 ';
    element.style.zIndex = Math.floor(Math.random() * 20);
    i++;
  }
}

cicrle();



// ==========================================   DARK MODE ============================
let icon = document.getElementById('moon');

icon.onclick = function () {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.src = 'assets/img/sun.png';
  } else {
    icon.src = 'assets/img/moon.png';
  }
};

// ==========================================   DARK MODE ============================

// Dropdown Menu========================================>

let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.navigation');

menuToggle.onclick = function () {
  navigation.classList.toggle('active')
}
