/*<![CDATA[*/
document.addEventListener("DOMContentLoaded", function () {
    // Check if the post-s element exists
    var postMElement = document.getElementById("post-m");
  
    if (postMElement) {
      // Dynamically insert HTML into the post-s element
      postMElement.innerHTML = `
          <!--iframe container-->
    <div class="PNmed">
        <div id="PNtext">
            <div>
                <span class="line">Visit Main Site 
                    <a href="https://weebvoice.blogspot.com/" target="_blank" class="site">WeebVoice</a></span>
                <div id="post-iframe">
                    <iframe allowfullscreen="" id="m-iframe" src=""></iframe>
                </div>
            </div>
    
            <span class="line">
                Watch and download more Anime from
                <a href="https://weebvoice.blogspot.com/" target="_blank" class="site">WeebVoice</a>
            </span>
            <!--Video Previews-->
            <div class="video-container" id="video-previews"></div>
    
            <!--Support us Section-->
            <p>
                <span class="line">
                    Are You Really Enjoying this? Consider supporting us by 
                </span>
            <div>
                <button class="links-button"
                    onclick="window.open('https://weebvoice.blogspot.com/p/join-us.html', '_blank')">
                    <i class="icon go-link"></i>
                    Join us
                </button>
            </div>
            </p>
        </div>
    </div>
        `;
    }

    const mIframe = document.getElementById("m-iframe");
    const videoPreviewsContainer = document.getElementById("video-previews");
  
    // Read the last clicked link from the cookie
    const lastClickedLink = getCookie("m-link");
  
    // Load the initial link or the last clicked link in the s-iframe
    if (lastClickedLink) {
      mIframe.src = lastClickedLink;
    } else if (initialLink) {
      mIframe.src = initialLink;
    }
  
    // Function to change the source of sIframe
    function changeIframeSource(link) {
      mIframe.src = link;
      // Save the last clicked link in the cookie
      setCookie("m-link", link, 3); // Expires in 3 hours
    }
  
    // Function to generate video previews using post script data
    function generateVideoPreviews() {
      videoPreviewsContainer.innerHTML = "";
  
      const link = miframeLink;
  
      // Create video preview container
      const videoPreview = document.createElement("div");
      videoPreview.classList.add("video-preview");
      videoPreview.addEventListener("click", function () {
        changeIframeSource(link);
      });
  
      // Create video title
      const videoTitle = document.createElement("span");
      videoTitle.classList.add("video-title");
  
      // Combine the series title and episode number
      videoTitle.textContent = movieTitle;
  
      // Create preview image
      const videoId = extractVideoId(link);
      const thumbnailLink = `https://drive.google.com/thumbnail?id=${videoId}`;
      const pImg = document.createElement("img");
      pImg.alt = videoTitle.textContent;
      pImg.src = thumbnailLink;
      pImg.id = "pImg";
  
      // Append elements to the video preview container
      videoPreview.appendChild(pImg);
      videoPreview.appendChild(videoTitle);
  
      // Append the video preview to the container
      videoPreviewsContainer.appendChild(videoPreview);
    }
  
    // Function to extract video ID from the Google Drive link
    function extractVideoId(link) {
      const match = link.match(/\/d\/(.*?)\//);
      return match ? match[1] : null;
    }
  
    // Call the function to generate initial video previews
    generateVideoPreviews();
  
    // Function to set a cookie
    function setCookie(name, value, hours) {
      const date = new Date();
      date.setTime(date.getTime() + hours * 60 * 60 * 1000);
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
  
    // Function to get a cookie value
    function getCookie(name) {
      const cname = name + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(";");
  
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
          return c.substring(cname.length, c.length);
        }
      }
  
      return null;
    }
  });
  /*]]>*/