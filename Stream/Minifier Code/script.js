function app_get_url(a){var b=document.createElement("a");return b.href=a,b}function app_get_host_name(a){return(null==a||""===a||a.match(/^\#/)||-1===(a=app_get_url(a)).href.search(/^http[s]?:\/\//))?"":a.href.split("/")[2].split(":")[0].toLowerCase()}function app_base64_encode(a){return btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g,function(b,c){return String.fromCharCode("0x"+c)}))}function app_get_wildcard_domains(a){var b=[];for(i=0;i<a.length;i++){a[i].match(/^\*\./)&&b.push(a[i].replace(/^\*\./,""))}return b}function app_match_wildcard_domain(c,d){var b=app_get_wildcard_domains(c);for(i=0;i<b.length;i++){if(d.substr(-1*b[i].length)===b[i]){return true}}return false}function app_domain_exist(a,b){return a.indexOf(b)>-1||app_match_wildcard_domain(a,b)}function modifyLink(c){var e;var b=1;if(c.tagName==="A"){e=c.href}else{if(c.hasAttribute("onclick")){var a=c.getAttribute("onclick");var f=a.match(/window\.open\(['"](.*?)['"]/);if(f&&f[1]){e=f[1]}}}if(e){var d=app_get_host_name(e);if(app_domains&&app_domain_exist(app_domains,d)){var g=app_url+"full?api="+encodeURIComponent(app_api_token)+"&url="+app_base64_encode(e)+"&type="+encodeURIComponent(b);if(c.tagName==="A"){c.href=g}else{if(c.hasAttribute("onclick")){c.onclick=function(){window.open(g)}}}}}}document.addEventListener("DOMContentLoaded",function(){if(typeof app_url==="undefined"){if(typeof adlinkfly_url!=="undefined"){app_url=adlinkfly_url}}if(typeof app_api_token==="undefined"){if(typeof adlinkfly_api_token!=="undefined"){app_api_token=adlinkfly_api_token}}if(typeof app_advert==="undefined"){if(typeof adlinkfly_advert!=="undefined"){app_advert=adlinkfly_advert}else{app_advert=1}}var b=document.querySelectorAll("a, .links-button");for(var a=0;a<b.length;a++){modifyLink(b[a])}});