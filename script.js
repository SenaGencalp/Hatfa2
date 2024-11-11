function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = now.toLocaleDateString("tr-TR", options);
  const time = now.toLocaleTimeString("tr-TR");
  document.getElementById("date-time").textContent = `${date} - ${time}`;
}

const name = prompt("Lütfen isminizi girin:");
if (name) {
  document.getElementById("greeting").textContent = `Merhaba, ${name}!`;
  updateDateTime();
  setInterval(updateDateTime, 1000); // Her saniye saati güncelle
} else {
  document.getElementById("greeting").textContent = "Lütfen bir isim girin.";
}
