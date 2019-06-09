// ==UserScript==
// @name nocarousel for pyimagesearch.com (Opera/Chrome) | Jason
// @description Turns off the annoying sidebar carousel. Sorry Adrian. The script finds a <div> with the ID of "pyimg_gurus_carousel" and assigns it a new ID of "nocarousel", thus preventing the carousel function. Script adds innerHTML as a positive visual indication that it's working. ( and it's my first userscript! - hence, more meta than meat! )
// @namespace https://greasyfork.org/
<<<<<<< HEAD
// @version 1.2
// @match https://www.pyimagesearch.com/*
// @updateURL 	https://gist.github.com/JCBrown602/35733862f9b949614a69f42e2ef813f1/raw/f43da1a27469af9d9855eff897f54044c5054987/pyimagesearch.com.user.js
// @downloadURL https://gist.github.com/JCBrown602/pyimagesearch.com/raw/pyimagesearch.com.user.js
// @license MIT
// @supportURL https://gist.github.com/JCBrown602/35733862f9b949614a69f42e2ef813f1
=======
// @version 2.1
// @match https://www.pyimagesearch.com/*
// @updateURL 	https://github.com/JCBrown602/pyimagesearch.com/raw/master/pyimagesearch.com.user.js
// @downloadURL https://github.com/JCBrown602/pyimagesearch.com.git
// @license MIT
// @supportURL https://github.com/JCBrown602/pyimagesearch.com/issues
>>>>>>> newBranch
// @compatible opera
// @compatible chrome
// @author Jason | jetcanlabs.com
// @encoding utf-8
// @grant none
<<<<<<< HEAD
// @icon https://gist.githubusercontent.com/JCBrown602/35733862f9b949614a69f42e2ef813f1/raw/cat.ico
// @homepage https://gist.github.com/JCBrown602/35733862f9b949614a69f42e2ef813f1/
=======
// @icon https://raw.githubusercontent.com/JCBrown602/pyimagesearch.com/master/cat.ico
// @homepage https://github.com/JCBrown602/pyimagesearch.com
>>>>>>> newBranch
// ==/UserScript==

// Browser developer tools "inspect element" gives ID of offending <div>
  var query = "pyimg_gurus_carousel";
  var element = document.getElementById(query);

  element.id = "nocarousel";
  element.innerHTML = "nocarousel: carousel stopped by monkeys.";