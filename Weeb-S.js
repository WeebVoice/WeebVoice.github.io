/*<![CDATA[*/
var c=document.getElementById("post-s");c&&(c.innerHTML='<div class="PNmed"><div id="PNtext"><div><span class="line">Visit Main Site <a href="https://weebvoice.blogspot.com/" target="_blank" class="site">WeebVoice</a></span><div id="post-iframe"><iframe allowfullscreen="" id="s-iframe" src=""></iframe></div></div><span class="line">Watch and download more Anime from <a href="https://weebvoice.blogspot.com/" target="_blank" class="site">WeebVoice</a></span><div class="video-container" id="video-previews"></div><div id="pagination"><button id="prev-button">Prev</button></div><p><span class="line">Are You Really Enjoying this? Consider supporting us by</span><div><button class="links-button" onclick="window.open("https://weebvoice.blogspot.com/p/join-us.html","_blank")"><i class="icon go-link"></i>Join us</button></div></p></div></div>');
let r=document.getElementById("s-iframe"),p=document.getElementById("video-previews"),m=document.getElementById("prev-button"),f=1,u=C("s-link");function v(e){let t=window.location.pathname;r.src=e,k("s-link",e,3,t)}function g(){p.innerHTML="";let e=(f-1)*3,t=Math.min(links.length,e+3);for(let n=e;n<t;n++){let i=links[n],l=document.createElement("div");l.classList.add("video-preview"),l.addEventListener("click",function(){v(i)});let o=document.createElement("span");o.classList.add("video-title");let s=(n+episodeStart).toString().padStart(2,"0");o.textContent="[WeebVoice] "+seriesTitle+"-"+s;let a=`https://drive.google.com/thumbnail?id=${b(i)}`,d=document.createElement("img");d.alt=o.textContent,d.src=a,d.id="pImg",l.appendChild(d),l.appendChild(o),p.appendChild(l)}h()}function b(e){let t=e.match(/\/d\/(.*?)\//);return t?t[1]:null}function h(){let e=Math.ceil(links.length/3),t=document.getElementById("pagination");t.innerHTML="";let n=document.createElement("div");if(n.classList.add("page-numbers"),e<=3)for(let i=1;i<=e;i++){let l=document.createElement("button");l.classList.add("page-number"),l.textContent=i,l.addEventListener("click",function(){E(i)}),i===f&&(l.style.backgroundColor="#ff492d",l.style.color="#ffffff"),n.appendChild(l)}else{if(f>1){let o=document.createElement("button");o.id="prev-button",o.textContent="Prev",o.addEventListener("click",function(){E(f-1)}),n.appendChild(o)}let s,a;f<=Math.ceil(1.5)?(s=1,a=Math.min(3,e)):f>=e-Math.floor(1.5)?(s=e-3+1,a=e):(s=f-Math.floor(1.5),a=f+Math.ceil(1.5)-1);for(let d=s;d<=a;d++){let c=document.createElement("button");c.classList.add("page-number"),c.textContent=d,c.addEventListener("click",function(){E(d)}),d===f&&(c.style.backgroundColor="#ff492d",c.style.color="#ffffff"),n.appendChild(c)}if(f<e){let r=document.createElement("button");r.id="prev-button",r.textContent="Next",r.addEventListener("click",function(){E(f+1)}),n.appendChild(r)}}t.appendChild(n),m.disabled=1===f}function E(e){f=e,g()}function k(e,t,n,i){let l=new Date;l.setTime(l.getTime()+36e5*n);let o="expires="+l.toUTCString();document.cookie=e+"="+t+";"+o+";"+(i?"path="+i+";":"")}function C(e){let t=e+"=",n=decodeURIComponent(document.cookie).split(";");for(let i=0;i<n.length;i++){let l=n[i];for(;" "==l.charAt(0);)l=l.substring(1);if(0==l.indexOf(t))return l.substring(t.length,l.length)}return null}u?r.src=u:initialLink&&(r.src=initialLink),m.addEventListener("click",function(){f>1&&(f--,g())}),g()
/*]]>*/