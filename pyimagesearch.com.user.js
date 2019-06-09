// ==UserScript==
// @name nocarousel on pyimagesearch.com (Opera) | Jason
// @namespace https://userscripts.org/scripts/show/######
// @description Turns off the annoying sidebar carousel. Sorry Adrian. The script finds a <div> with the ID of "pyimg_gurus_carousel" and assigns it a new ID of "nocarousel", thus preventing the carousel function. Script adds innerHTML as a positive visual.
// @author Jason | jetcanlabs.com
// @version 1.0
// @encoding utf-8
// @grant none
// @include https://www.pyimagesearch.com/*
// @license https://creativecommons.org/licenses/by-sa/4.0/
// @icon https://gist.githubusercontent.com/JCBrown602/35733862f9b949614a69f42e2ef813f1/raw/f84b755a8f16310cde99d679fcdef781d2b64435/cat.ico
// @homepage https://github.com/jcbrown602/pyimagesearch.com.user.js/
// @updateURL https://raw.githubusercontent.com/JCBrown602/nocarousel//pyimagesearch.com.user.js
// @downloadURL https://gist.github.com/JCBrown602/35733862f9b949614a69f42e2ef813f1/raw/9a36914303577cfd3c72f1b91615a3f689e7cfb4/pyimagesearch.com.user.js
// ==/UserScript==

// Browser developer tools "inspect element" gives ID of offending <div>
  var query = "pyimg_gurus_carousel";
  var element = document.getElementById(query);

  document.getElementById(query).id = "nocarousel";
  document.getElementById("nocarousel").innerHTML = "nocarousel: carousel stopped by monkeys.";
