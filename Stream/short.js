function app_get_url(e) {
    var n = document.createElement("a");
    return n.href = e, n;
}

function app_get_host_name(e) {
    return (null == e || "" === e || e.match(/^\#/) || -1 === (e = app_get_url(e)).href.search(/^http[s]?:\/\//)) ? "" : e.href.split("/")[2].split(":")[0].toLowerCase();
}

function app_base64_encode(e) {
    return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(e, n) {
        return String.fromCharCode("0x" + n);
    }));
}

function app_get_wildcard_domains(e) {
    var n = [];
    for (i = 0; i < e.length; i++)
        e[i].match(/^\*\./) && n.push(e[i].replace(/^\*\./, ""));
    return n;
}

function app_match_wildcard_domain(e, n) {
    var a = app_get_wildcard_domains(e);
    for (i = 0; i < a.length; i++)
        if (n.substr(-1 * a[i].length) === a[i])
            return true;
    return false;
}

function app_domain_exist(e, n) {
    return e.indexOf(n) > -1 || app_match_wildcard_domain(e, n);
}

function modifyLink(linkElement) {
    var linkUrl;
    var linkType = 1; // default value if app_advert is not defined

    // Extract the URL from the linkElement based on its type (anchor or onclick attribute)
    if (linkElement.tagName === "A") {
        linkUrl = linkElement.href;
    } else if (linkElement.hasAttribute("onclick")) {
        var onclickValue = linkElement.getAttribute("onclick");
        var match = onclickValue.match(/window\.open\(['"](.*?)['"]/);
        if (match && match[1]) {
            linkUrl = match[1];
        }
    }

    // Modify the URL if it matches the specified domains
    if (linkUrl) {
        var hostname = app_get_host_name(linkUrl);

        if (app_domains && app_domain_exist(app_domains, hostname)) {
            var apiUrl = app_url + "full?api=" + encodeURIComponent(app_api_token) + "&url=" + app_base64_encode(linkUrl) + "&type=" + encodeURIComponent(linkType);

            // Update the link URL based on its type
            if (linkElement.tagName === "A") {
                linkElement.href = apiUrl;
            } else if (linkElement.hasAttribute("onclick")) {
                var newOnclickValue = onclickValue.replace(linkUrl, apiUrl);
                linkElement.setAttribute("onclick", newOnclickValue);
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (typeof app_url === "undefined") {
        if (typeof adlinkfly_url !== "undefined") {
            app_url = adlinkfly_url;
        }
    }

    if (typeof app_api_token === "undefined") {
        if (typeof adlinkfly_api_token !== "undefined") {
            app_api_token = adlinkfly_api_token;
        }
    }

    if (typeof app_advert === "undefined") {
        if (typeof adlinkfly_advert !== "undefined") {
            app_advert = adlinkfly_advert;
        } else {
            app_advert = 1;
        }
    }

    var linkElements = document.querySelectorAll("a[onclick]");

    for (var i = 0; i < linkElements.length; i++) {
        modifyLink(linkElements[i]);
    }
});
