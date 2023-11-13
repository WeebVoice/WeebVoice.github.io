// Get all the buttons with class "dupBtn"
var buttons = document.querySelectorAll(".dupBtn");

// Function to start the countdown
function startCountdown(button) {
  // Use previous countdown value if available
  var countdownValue = button.countdownValue || 10;

  // Interval function to update the countdown
  button.countdownInterval = setInterval(function() {
    button.innerText = countdownValue;
    countdownValue--;

    // Check if countdown is complete
    if (countdownValue < 0) {
      clearInterval(button.countdownInterval);

      // Hide the countdown button
      button.style.display = "none";

      // Show the links button
      var linksButton = button.nextElementSibling;
      linksButton.style.display = "inline-flex";

      // Enable all countdown buttons
      buttons.forEach(function(btn) {
        btn.disabled = false;
      });
    }
  }, 1250);
}

// Function to handle countdown
function Countdown(button) {
  // Disable all countdown buttons
  buttons.forEach(function(btn) {
    btn.disabled = true;
  });

  // Disable the clicked countdown button
  button.disabled = true;

  // Add the countdown class
  button.classList.add("countdown");

  // Start the countdown
  startCountdown(button);
}

// Event listener for visibility change
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === "hidden") {
    pauseCountdowns();
  } else if (document.visibilityState === "visible") {
    resumeCountdowns();
  }
});

// Function to pause countdowns
function pauseCountdowns() {
  buttons.forEach(function(button) {
    clearInterval(button.countdownInterval);

    // Store the current countdown value
    button.countdownValue = parseInt(button.innerText);
  });
}

// Function to resume countdowns
function resumeCountdowns() {
  buttons.forEach(function(button) {
    if (button.classList.contains("countdown")) {
      startCountdown(button);
    }
  });
}