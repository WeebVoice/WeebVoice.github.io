/*<![CDATA[*/
const postM = document.getElementById("post-m");
const postS = document.getElementById("post-s");
if (postM) {
  //HTML insert
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
  });

  //Executibng Code
  document.addEventListener("DOMContentLoaded", function () {
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
      // Get the current page path dynamically
      const currentPath = window.location.pathname;

      mIframe.src = link;
      // Save the last clicked link in the cookie
      setCookie("m-link", link, 3, currentPath); // Expires in 3 hours
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

    // Function to set a cookie time and specific path
    function setCookie(name, value, hours, path) {
      const date = new Date();
      date.setTime(date.getTime() + hours * 60 * 60 * 1000);
      const expires = "expires=" + date.toUTCString();
      const pathString = path ? "path=" + path + ";" : ""; // Add path if provided
      document.cookie = name + "=" + value + ";" + expires + ";" + pathString;
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
} else if (postS) {
  //HTML insert
  document.addEventListener("DOMContentLoaded", function () {
    // Check if the post-s element exists
    var postSElement = document.getElementById("post-s");

    if (postSElement) {
      // Dynamically insert HTML into the post-s element
      postSElement.innerHTML = `
          <!--iframe container-->
    <div class="PNmed">
        <div id="PNtext">
            <div>
                <span class="line">Visit Main Site 
                    <a href="https://weebvoice.blogspot.com/" target="_blank" class="site">WeebVoice</a></span>
                <div id="post-iframe">
                    <iframe allowfullscreen="" id="s-iframe" src=""></iframe>
                </div>
            </div>
    
            <span class="line">
                Watch and download more Anime from
                <a href="https://weebvoice.blogspot.com/" target="_blank" class="site">WeebVoice</a>
            </span>
            <!--Video Previews-->
            <div class="video-container" id="video-previews"></div>
    
            <!--Pagination-->
            <div id="pagination">
                <button id="prev-button">Prev</button>
            </div>
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
  });

  //Executibng Code
  document.addEventListener("DOMContentLoaded", function () {
    const sIframe = document.getElementById("s-iframe");
    const videoPreviewsContainer = document.getElementById("video-previews");
    const prevButton = document.getElementById("prev-button");
    let currentPage = 1;
    const videosPerPage = 3;
    const maxDisplayedPages = 3; // Maximum number of page buttons to display

    // Read the last clicked link from the cookie
    const lastClickedLink = getCookie("s-link");

    // Load the initial link or the last clicked link in the s-iframe
    if (lastClickedLink) {
      sIframe.src = lastClickedLink;
    } else if (initialLink) {
      sIframe.src = initialLink;
    }

    // Function to change the source of sIframe
    function changeIframeSource(link) {
      // Get the current page path dynamically
      const currentPath = window.location.pathname;

      sIframe.src = link;
      // Save the last clicked link and current page in the cookie with the dynamic path
      setCookie("s-link", link, 3, currentPath);
    }

    // Function to generate video previews using post script data
    function generateVideoPreviews() {
      videoPreviewsContainer.innerHTML = "";

      // Calculate the maximum number of video previews to display
      const startIndex = (currentPage - 1) * videosPerPage;
      const endIndex = startIndex + videosPerPage;
      const maxPreviews = Math.min(links.length, endIndex);

      // Inside the loop where you generate video previews:
      for (let i = startIndex; i < maxPreviews; i++) {
        const link = links[i];

        // Create video preview container
        const videoPreview = document.createElement("div");
        videoPreview.classList.add("video-preview");
        videoPreview.addEventListener("click", function () {
          changeIframeSource(link);
        });

        // Create video title
        const videoTitle = document.createElement("span");
        videoTitle.classList.add("video-title");

        // Generate the episode number with leading zeros
        const episodeNumber = (i + episodeStart).toString().padStart(2, "0");

        // Combine the series title and episode number
        videoTitle.textContent =
          "[WeebVoice] " + seriesTitle + "-" + episodeNumber;

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

      showVideos();
    }

    // Function to extract video ID from the Google Drive link
    function extractVideoId(link) {
      const match = link.match(/\/d\/(.*?)\//);
      return match ? match[1] : null;
    }

    function showVideos() {
      const totalPages = Math.ceil(links.length / videosPerPage);
      const pagination = document.getElementById("pagination");
      pagination.innerHTML = "";

      const pageNumbers = document.createElement("div");
      pageNumbers.classList.add("page-numbers");

      if (totalPages <= maxDisplayedPages) {
        // Show all page buttons without previous and next buttons
        for (let i = 1; i <= totalPages; i++) {
          const pageNumber = document.createElement("button");
          pageNumber.classList.add("page-number");
          pageNumber.textContent = i;
          pageNumber.addEventListener("click", function () {
            goToPage(i);
          });
          if (i === currentPage) {
            pageNumber.style.backgroundColor = "#ff492d";
            pageNumber.style.color = "#ffffff";
          }
          pageNumbers.appendChild(pageNumber);
        }
      } else {
        if (currentPage > 1) {
          // Add previous button
          const prevPage = document.createElement("button");
          prevPage.id = "prev-button";
          prevPage.textContent = "Prev";
          prevPage.addEventListener("click", function () {
            goToPage(currentPage - 1);
          });
          pageNumbers.appendChild(prevPage);
        }

        // Show a subset of page buttons with previous and next buttons
        let startPage, endPage;

        if (currentPage <= Math.ceil(maxDisplayedPages / 2)) {
          startPage = 1;
          endPage = Math.min(maxDisplayedPages, totalPages);
        } else if (
          currentPage >=
          totalPages - Math.floor(maxDisplayedPages / 2)
        ) {
          startPage = totalPages - maxDisplayedPages + 1;
          endPage = totalPages;
        } else {
          startPage = currentPage - Math.floor(maxDisplayedPages / 2);
          endPage = currentPage + Math.ceil(maxDisplayedPages / 2) - 1;
        }

        for (let i = startPage; i <= endPage; i++) {
          const pageNumber = document.createElement("button");
          pageNumber.classList.add("page-number");
          pageNumber.textContent = i;
          pageNumber.addEventListener("click", function () {
            goToPage(i);
          });
          if (i === currentPage) {
            pageNumber.style.backgroundColor = "#ff492d";
            pageNumber.style.color = "#ffffff";
          }
          pageNumbers.appendChild(pageNumber);
        }

        // Add next button
        if (currentPage < totalPages) {
          const nextPage = document.createElement("button");
          nextPage.id = "prev-button";
          nextPage.textContent = "Next";
          nextPage.addEventListener("click", function () {
            goToPage(currentPage + 1);
          });
          pageNumbers.appendChild(nextPage);
        }
      }

      pagination.appendChild(pageNumbers);
      prevButton.disabled = currentPage === 1;
    }

    function goToPage(page) {
      currentPage = page;
      generateVideoPreviews();
    }

    prevButton.addEventListener("click", function () {
      if (currentPage > 1) {
        currentPage--;
        generateVideoPreviews();
      }
    });

    // Call the function to generate initial video previews
    generateVideoPreviews();

    // Function to set a cookie time and specific path
    function setCookie(name, value, hours, path) {
      const date = new Date();
      date.setTime(date.getTime() + hours * 60 * 60 * 1000);
      const expires = "expires=" + date.toUTCString();
      const pathString = path ? "path=" + path + ";" : ""; // Add path if provided
      document.cookie = name + "=" + value + ";" + expires + ";" + pathString;
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
}
/*]]>*/