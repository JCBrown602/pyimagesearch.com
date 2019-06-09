// ==UserScript==
// @name nocarousel for pyimagesearch.com (Opera/Chrome) | Jason
// @description Turns off the annoying sidebar carousel. Sorry Adrian. The script finds a <div> with the ID of "pyimg_gurus_carousel" and assigns it a new ID of "nocarousel", thus preventing the carousel function. Script adds innerHTML as a positive visual indication that it's working. ( and it's my first userscript! - hence, more meta than meat! )
// @namespace https://greasyfork.org/
// @version 2.0
// @match https://www.pyimagesearch.com/*
// @updateURL 	https://github.com/JCBrown602/pyimagesearch.com/raw/master/pyimagesearch.com.user.js
// @downloadURL https://github.com/JCBrown602/pyimagesearch.com.git
// @license MIT
// @supportURL https://github.com/JCBrown602/pyimagesearch.com/issues
// @compatible opera
// @compatible chrome
// @author Jason | jetcanlabs.com
// @encoding utf-8
// @grant none
// @icon https://raw.githubusercontent.com/JCBrown602/pyimagesearch.com/master/cat.ico
// @homepage https://github.com/JCBrown602/pyimagesearch.com
// ==/UserScript==

// Browser developer tools "inspect element" gives ID of offending <div>
  var query = "pyimg_gurus_carousel";
  var element = document.getElementById(query);

  element.id = "nocarousel";
  element.innerHTML = "nocarousel: carousel stopped by monkeys.";