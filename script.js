// ===== ВХОД =====
function login() {
  const email = document.getElementById("email").value;

  if (email !== "") {
    localStorage.setItem("user", email); // сохраняем email
    window.location.href = "index.html";
  } else {
    alert("Введите email");
  }
}

// ===== ВЫБОР ПОДПИСКИ =====
function choosePlan(plan) {
  localStorage.setItem("plan", plan);
  alert("Вы выбрали: " + plan);
  window.location.href = "index.html";
}

// ===== ПОКУПКА ЧЕРЕЗ WHATSAPP =====
function buy(period, price) {
  // сохраняем выбранный тариф
  localStorage.setItem("plan", period);

  const text =
    `Сәлеметсіз бе! Мен NKsim Start подпискасын сатып алғым келеді.\n` +
    `Тариф: ${period} — ${price} тг`;

  const url =
    "https://wa.me/77752631158?text=" + encodeURIComponent(text);

  window.open(url, "_blank");
}
