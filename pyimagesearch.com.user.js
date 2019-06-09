// ==UserScript==
// @name nocarousel on pyimagesearch.com (Opera) | Jason
// @namespace https://userscripts.org/scripts/show/######
// @description Turns off the annoying sidebar carousel. Sorry Adrian.
// @author Jason | jetcanlabs.com
// @version 0.3
// @encoding utf-8
// @license https://creativecommons.org/licenses/by-sa/4.0/
// @include https://www.pyimagesearch.com/*
// @grant none
// @icon https://raw.github.com/jcbrown602/pyimagesearch.com.user.js/master/cat.ico
// @homepage https://github.com/jcbrown602/pyimagesearch.com.user.js/
// @updateURL https://raw.githubusercontent.com/jcbrown602/pyimagesearch.com.user.js/master/pyimagesearch.com.user.js
// @downloadURL https://raw.githubusercontent.com/jcbrown602/pyimagesearch.com.user.js/master/pyimagesearch.com.user.js
// ==/UserScript==

var query = "pyimg_gurus_carousel";

function removeElement(query) {
    // Removes an element from the document
    var element = document.getElementById(query);
    element.parentNode.removeChild(element);
}