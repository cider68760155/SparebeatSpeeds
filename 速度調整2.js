// ==UserScript==
// @name         Sparebeat速度調整2
// @namespace    https://twitter.com/cider68760155
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://sparebeat.suzukibakery.com
// @grant        none
// ==/UserScript==

(function() {
    if(localStorage.getItem('redirected')==0)return;
    localStorage.setItem('speed',localStorage.getItem('speed_to_set'));
    location.href=localStorage.getItem('playURL');
})();