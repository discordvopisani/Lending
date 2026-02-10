function login() 
{ const email = document.getElementById("email").value; 
 if (email !== "") { localStorage.setItem("user", email); // "запоминаем" вход window.location.href = "index.html"; // переход } 
 else alert("Введите email"); } } 
function choosePlan(plan)
{ localStorage.setItem("plan", plan); alert("Вы выбрали: " + plan); window.location.href = "index.html"; }
function buy(period, price) {
  const text =
    `Сәлеметсіз бе! Мен StreamX подпискасын сатып алғым келеді.\n` +
    `Тариф: ${period} — ${price} тг`;

  const url =
    "https://wa.me/77752631158?text=" + encodeURIComponent(text);

  window.open(url, "_blank");
}

