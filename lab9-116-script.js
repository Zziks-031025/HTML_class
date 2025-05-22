let interval;
const lights = document.querySelectorAll('.light');
const colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];
let currentIndex = 0;

function changeColor() {
lights.forEach((light, index) => {
light.style.borderColor = colors[(index + currentIndex) % colors.length];
});
currentIndex = (currentIndex + 1) % colors.length;
}

function startAnimation() {
if (!interval) { // 确保没有重复启动动画
interval = setInterval(changeColor, 500); // 每500毫秒改变一次颜色
document.getElementById('startButton').disabled = true;
document.getElementById('stopButton').disabled = false;
}
}

function stopAnimation() {
clearInterval(interval);
interval = null;
document.getElementById('startButton').disabled = false;
document.getElementById('stopButton').disabled = true;
}

document.getElementById('startButton').addEventListener('click', startAnimation);
document.getElementById('stopButton').addEventListener('click', stopAnimation);