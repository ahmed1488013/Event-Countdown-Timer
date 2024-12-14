// Set the date and time for the event
const eventDate = new Date("2024-12-31T00:00:00").getTime();

// Function to update the countdown timer
function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days-value").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours-value").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes-value").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds-value").innerText = seconds < 10 ? "0" + seconds : seconds;

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("days-value").innerText = "00";
    document.getElementById("hours-value").innerText = "00";
    document.getElementById("minutes-value").innerText = "00";
    document.getElementById("seconds-value").innerText = "00";
    document.querySelector("h1").innerText = "The Event is Here!";
  }
}

// Update the countdown every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initialize countdown
updateCountdown();
