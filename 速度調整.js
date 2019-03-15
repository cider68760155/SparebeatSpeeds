// ==UserScript==
// @name         SparebeatSpeeds
// @namespace    https://github.com/cider68760155/SparebeatSpeeds
// @author       cider
// @description  This kept notes speed constant on Sparebeat
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js
// @match        http://sparebeat.suzukibakery.com
// @match        http://sparebeat.suzukibakery.com/*
// @match        http://sparebeat.suzukibakery.com/play/*
// @grant        none
// ==/UserScript==

(function() {
    var url=location.href;
    if(/sparebeat\.suzukibakery\.com\/play/.test(url))play();
    else index();
})();

function play(){
    if(localStorage.getItem('redirected')==1){
        localStorage.setItem('redirected',0);
        return;
    }
    var baseBPM=localStorage.getItem('baseBPM');
    if(baseBPM==0)baseBPM=350;
    var bpm=Number($('#start-bpm').text().match(/[0-9]+/));
    var speed=baseBPM/bpm;
    localStorage.setItem('speed_to_set',speed);
    localStorage.setItem('playURL',location.href);
    localStorage.setItem('redirected',1);
    location.href="http://sparebeat.suzukibakery.com";
}

function index(){
    if(localStorage.getItem('redirected')==0){
        if(location.search[0]=="?"){
            var urlParams = new URLSearchParams(window.location.search);
            if(urlParams.has('baseBPM')){
                localStorage.setItem("baseBPM",Number(urlParams.get('baseBPM')));
            }
        }
        else {
            location.href=location.href+"?baseBPM="+String(localStorage.getItem('baseBPM'));
        }
        return;
    }
    localStorage.setItem('speed',localStorage.getItem('speed_to_set'));
    location.href=localStorage.getItem('playURL');
}