// ==UserScript==
// @name nocarousel on pyimagesearch.com (Opera) | Jason
// @namespace https://userscripts.org/scripts/show/######
// @description Turns off the annoying sidebar carousel. Sorry Adrian.
// @author Jason | jetcanlabs.com
// @version 0.2
// @encoding utf-8
// @grant none
// @include https://www.pyimagesearch.com/*
// @license https://creativecommons.org/licenses/by-sa/4.0/
// @icon https://raw.github.com/jcbrown602/pyimagesearch.com.user.js/master/icon.png
// @homepage https://github.com/jcbrown602/pyimagesearch.com.user.js/
// @updateURL https://gist.github.com/JCBrown602/35733862f9b949614a69f42e2ef813f1/raw/9a36914303577cfd3c72f1b91615a3f689e7cfb4/pyimagesearch.com.user.js
// @downloadURL https://gist.github.com/JCBrown602/35733862f9b949614a69f42e2ef813f1/raw/9a36914303577cfd3c72f1b91615a3f689e7cfb4/pyimagesearch.com.user.js
// ==/UserScript==

var query = "pyimg_gurus_carousel";

function removeElement(query) {
    // Removes an element from the document
    var element = document.getElementById(query);
    element.parentNode.removeChild(element);
}