function login() {
  const email = document.getElementById("email").value;

  if (email !== "") {
    localStorage.setItem("user", email); // "запоминаем" вход
    window.location.href = "index.html"; // переход
  } else {
    alert("Введите email");
  }
}
function choosePlan(plan) {
  localStorage.setItem("plan", plan);
  alert("Вы выбрали: " + plan);
  window.location.href = "index.html";
}

