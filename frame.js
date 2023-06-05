<!--JavaScript for Buttons and iframe-->
<script>
const iframe = document.getElementById("my-iframe");
const buttonContainer = document.getElementById("button-container");

// Retrieve the video links from the post
const videoLinks = Array.from(document.getElementsByClassName("video-links")[0].getElementsByTagName("a"));

// Function to set the iframe source
function setIframeSource(videoURL) {
  iframe.src = videoURL;
}

// Dynamically generate buttons
videoLinks.forEach((link, index) => {
  const button = document.createElement("button");
  button.textContent = "Video " + (index + 1);

  // Set the iframe source when button is clicked
  button.addEventListener("click", function() {
    setIframeSource(link.href);
  });

  buttonContainer.appendChild(button);
});
</script>
