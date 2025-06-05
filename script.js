document.getElementById("browser").textContent = navigator.userAgent;
document.getElementById("platform").textContent = navigator.platform;
document.getElementById("language").textContent = navigator.language;
document.getElementById("time").textContent = new Date().toLocaleString();

fetch("https://api.ipify.org?format=json")
  .then(res => res.json())
  .then(data => document.getElementById("ip").textContent = data.ip)
  .catch(() => document.getElementById("ip").textContent = "Unavailable");

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById("location").textContent = `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
    const map = document.getElementById("map");
    map.innerHTML = `<iframe width="100%" height="100%" src="https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed"></iframe>`;
  }, () => {
    document.getElementById("location").textContent = "Location permission denied";
  });
} else {
  document.getElementById("location").textContent = "Geolocation not supported";
}
