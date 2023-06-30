const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(() => {
  const date = new Date();

  hour.innerText = (date.getHours() < 10 ? "0" : "") + date.getHours();
  min.innerText = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  sec.innerText = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
}, 1000);
