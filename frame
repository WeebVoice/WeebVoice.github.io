<div id="video-container">
  <iframe id="my-iframe" src="" allowfullscreen="" style="border: 0; width: 100%; height: 400px;"></iframe>
</div>

<script>
  // Get the video links
  var videoLinks = document.querySelectorAll(".video-links a");

  // Get the iframe element
  var iframe = document.getElementById("my-iframe");

  // Function to set the iframe source
  function setIframeSource(videoURL) {
    iframe.src = videoURL;
  }

  // Add click event listeners to the video links
  videoLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      setIframeSource(link.href);
    });
  });
</script>
