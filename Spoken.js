
var form = document.getElementById('form');
form.classList.toggle('show');

var sy = document.getElementById('seeyou');
sy.classList.toggle('show');

var star = document.getElementById('starAnimate');
star.classList.toggle('show');


var focusText = function() {
    document.getElementById("nameInput").focus();
}

var quoteFade = function() {
    var quote = document.getElementById('quote');
    quote.classList.toggle('fade');
    var leave = document.getElementById('leave');
    leave.classList.toggle('fade');
}
window.onload = function() {
    setTimeout(quoteFade, 1500);
    setTimeout(galaxiaFade, 200);
}

var fadeQuote = function() {
    var quote = document.getElementById('quote');
    quote.classList.toggle('fade');
    var leave = document.getElementById('leave');
    leave.classList.toggle('fade');
}

var killQuote = function() {
    var quote = document.getElementById('quote');
    quote.classList.toggle('disp');
    var leave = document.getElementById('leave');
    leave.classList.toggle('disp');
}

var leaveFade = function() {
    var leave = document.getElementById('leave');
    leave.classList.toggle('fade');
}

var spawnForm = function() {
    var form = document.getElementById('form');
    form.classList.toggle('show');
}

var fadeForm = function() {
    var form = document.getElementById('form');
    form.classList.toggle('fade');
}

document.getElementById('leave').onclick = function () {
    fadeQuote();
    setTimeout(killQuote, 1500);
    setTimeout(spawnForm, 1500);
    setTimeout(fadeForm, 1550);
    setTimeout(focusText, 1600);
}

var fadeFormContent = function() {
    var formC = document.getElementById('formContent');
    formC.classList.toggle('fade');
}

var starFade = function() {
    var star = document.getElementById('starAnimate');
    star.classList.toggle('fade');
}

var starRise = function() {
    var star = document.getElementById('starAnimate');
    star.classList.toggle('rise');
}

var galaxiaFade = function() {
    var galaxia = document.getElementById('galaxia');
    galaxia.classList.toggle('fade');
}

var seeyouFade = function() {
    var see = document.getElementById('seeyou');
    see.classList.toggle('fade');
}

var seeyouShow = function() {
    var see = document.getElementById('seeyou');
    see.classList.toggle('show');
}

var starLayerShow = function() {
    var star = document.getElementById('starAnimate');
    star.classList.toggle('show');
}

var submitName = function() {
    starLayerShow();
    fadeFormContent();
    starFade();
    setTimeout(galaxiaFade, 1500);
    setTimeout(starRise, 1550);
    setTimeout(seeyouShow, 3000);
    setTimeout(seeyouFade, 3050);
    return false;
}


document.getElementById('reset').onclick = function () {
    starFade();
    seeyouFade();
    setTimeout(seeyouShow, 1500);
    setTimeout(galaxiaFade, 1500);
    setTimeout(killQuote, 3000);
    setTimeout(fadeQuote, 3050);
    setTimeout(spawnForm, 3100);
    setTimeout(fadeForm, 3150);
    setTimeout(fadeFormContent, 3200);
    setTimeout(starRise, 4050);
    setTimeout(starLayerShow, 4050);
}