// ==UserScript==
// @name         Sparebeat速度調整1
// @namespace    https://twitter.com/cider68760155
// @version      0.1
// @description  try to take over the world!
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js
// @author       You
// @match        http://sparebeat.suzukibakery.com/play/*
// @grant        none
// ==/UserScript==

document.addEventListener('DOMcontentLoanded',main());

function main(){
    if(localStorage.getItem('redirected')==1){
        localStorage.setItem('redirected',0);
        return;
    }
    var baseBPM=localStorage.getItem('baseBPM');
    var bpm=Number($('#start-bpm').text().match(/[0-9]+/));
    var speed=baseBPM/bpm;
    localStorage.setItem('speed_to_set',speed);
    localStorage.setItem('playURL',location.href);
    localStorage.setItem('redirected',1);
    location.href="http://sparebeat.suzukibakery.com";
}