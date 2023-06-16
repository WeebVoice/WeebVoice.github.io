<!--Javascript for Buttons and iframe-->

<script>
  const iframe = document.getElementById("my-iframe");

  function showVideo() {
    const videoContainer = document.getElementById("video-container");
    videoContainer.style.display = "block";
  }
  
  document.getElementById("btn1").addEventListener("click", function() {
    iframe.src = "https://www.youtube.com/embed/VIDEO_ID_1";
  });

  document.getElementById("btn2").addEventListener("click", function() {
    iframe.src = "https://www.youtube.com/embed/VIDEO_ID_2";
  });

  document.getElementById("btn3").addEventListener("click", function() {
    iframe.src = "https://www.youtube.com/embed/VIDEO_ID_3";
  });

  document.getElementById("btn4").addEventListener("click", function() {
    iframe.src = "https://www.youtube.com/embed/VIDEO_ID_4";
  });

  document.getElementById("btn5").addEventListener("click", function() {
    iframe.src = "https://www.youtube.com/embed/VIDEO_ID_5";
  });

  document.getElementById("btn6").addEventListener("click", function() {
    iframe.src = "https://www.youtube.com/embed/VIDEO_ID_6";
  });
</script>
