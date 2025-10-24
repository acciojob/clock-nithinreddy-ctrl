function updateTimer() {
  const now = new Date();

  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  document.getElementById('timer').textContent = `${date} ${time}`;
}

// Show time immediately on page load
updateTimer();

// Update every second
setInterval(updateTimer, 1000);
