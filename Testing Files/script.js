/*<![CDATA[*/
const weebUrl = "https://weebvoice.github.io/";

function loadScript(url, id, async, location, callback) {
  const scriptElement = document.createElement("script");
  scriptElement.src = url;
  scriptElement.id = id;
  scriptElement.async = async;

  if (callback && typeof callback === "function") {
    scriptElement.onload = callback;
  }

  document.querySelector(location).appendChild(scriptElement);
}

function loadStylesheet(url, id, callback) {
  const linkElement = document.createElement("link");
  linkElement.href = url;
  linkElement.id = id;
  linkElement.rel = "stylesheet";

  if (callback && typeof callback === "function") {
    linkElement.onload = callback;
  }

  document.head.appendChild(linkElement);
}

// Example usage based on post conditions:

// Common CSS file for both post conditions
loadStylesheet(weebUrl + "style.css", "commonStyles", function () {
  console.log("Common CSS loaded!");
  // Additional logic after common CSS is loaded
});

// Condition 1: Post with ID 'post-m'
if (document.getElementById("post-m")) {
  loadScript(weebUrl + "Weeb-M.js", "script", true, "#post-m", function () {
    console.log("Weeb-M.js loaded for post-m!");
    // Additional logic after Weeb-M.js is loaded for post-m
  });
}

// Condition 2: Post with ID 'post-s'
if (document.getElementById("post-s")) {
  loadScript(weebUrl + "Weeb-S.js", "script-2", true, "#post-s", function () {
    console.log("Weeb-S.js loaded for post-s!");
    // Additional logic after Weeb-S.js is loaded for post-s
  });
}
/*]]>*/