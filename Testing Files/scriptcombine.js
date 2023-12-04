/*<![CDATA[*/
// Identify the post ID dynamically
const postM = document.getElementById("post-m");
const postS = document.getElementById("post-s");

// Load script based on post id "post-m" or "post-s"
if (postM) {
  // If post-m, dynamically insert Weeb-M.js
  var scriptM = document.createElement("script");
  scriptM.src = "https://weebvoice.github.io/Weeb-M.js";
  scriptM.onload = function () {
    // Your code dependent on Weeb-M.js can go here
  };
  document.head.appendChild(scriptM);
} else if (postS) {
  // iIf post-s, dynamically insert Weeb-S.js
  var scriptS = document.createElement("script");
  scriptS.src = "https://weebvoice.github.io/Weeb-S.js";
  scriptS.onload = function () {
    // Your code dependent on Weeb-S.js can go here
  };
  document.head.appendChild(scriptS);
}
/*]]>*/