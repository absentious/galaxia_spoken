var exec = function(elementId, action, time=0) {
    setTimeout(() => {
        var element = document.getElementById(elementId);
        element.classList.toggle(action);
    }, time);
}

var focusText = function() {
    document.getElementById("nameInput").focus();
}

exec('form', 'show');
exec('seeyou', 'show');
exec('starAnimate', 'show');

window.onload = function() {
    //quoteFade
    exec('quote', 'fade', 1000);
    exec('leave', 'fade', 1000);
    //galaxiaFade
    exec('galaxia', 'fade', 100);
}

//leave a name transition
document.getElementById('leave').onclick = function () {
    //quoteFade
    exec('quote', 'fade');
    exec('leave', 'fade');
    //killQuote
    exec('quote', 'disp', 1000);
    exec('leave', 'disp', 1000);
    //spawnForm
    exec('form', 'show', 1000);
    //formFade
    exec('form', 'fade', 1050);
    setTimeout(focusText, 1100);
}

//submit name transition
var submitName = function() {
    //starAnimate show
    exec('starAnimate', 'show');
    //fade formContent
    exec('formContent', 'fade');
    //star fade
    exec('starAnimate', 'fade');
    //galaxia fade
    exec('galaxia', 'fade', 1000);
    //star rise
    exec('starAnimate', 'rise', 1050);
    //seeyou show
    exec('seeyou', 'show', 2000);
    //seeyou fade
    exec('seeyou', 'fade', 2050);
    return false;
}

//reset form transition
document.getElementById('reset').onclick = function () {
    //starfade
    exec('starAnimate', 'fade');
    //seeyou fade
    exec('seeyou', 'fade');
    //seeyou show
    exec('seeyou', 'show', 1000);
    //galaxia fade
    exec('galaxia', 'fade', 1000);
    //kill quote
    exec('quote', 'disp', 2000);
    exec('leave', 'disp', 2000);
    //fade quote
    exec('quote', 'fade', 2050);
    exec('leave', 'fade', 2050);
    //spawn form
    exec('form', 'show', 2100);
    //fade form
    exec('form', 'fade', 2150);
    //fade formContent
    exec('formContent', 'fade', 2200);
    //star rise
    exec('starAnimate', 'rise', 2550);
    //starLayer show
    exec('starAnimate', 'show', 2550);
}