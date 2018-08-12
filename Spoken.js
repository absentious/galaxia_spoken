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
    exec('quote', 'fade', 1500);
    exec('leave', 'fade', 1500);
    //galaxiaFade
    exec('galaxia', 'fade', 200);
}

//leave a name transition
document.getElementById('leave').onclick = function () {
    //quoteFade
    exec('quote', 'fade');
    exec('leave', 'fade');
    //killQuote
    exec('quote', 'disp', 1500);
    exec('leave', 'disp', 1500);
    //spawnForm
    exec('form', 'show', 1500);
    //formFade
    exec('form', 'fade', 1550);
    setTimeout(focusText, 1600);
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
    exec('galaxia', 'fade', 1500);
    //star rise
    exec('starAnimate', 'rise', 1550);
    //seeyou show
    exec('seeyou', 'show', 3000);
    //seeyou fade
    exec('seeyou', 'fade', 3050);
    return false;
}

//reset form transition
document.getElementById('reset').onclick = function () {
    //starfade
    exec('starAnimate', 'fade');
    //seeyou fade
    exec('seeyou', 'fade');
    //seeyou show
    exec('seeyou', 'show', 1500);
    //galaxia fade
    exec('galaxia', 'fade', 1500);
    //kill quote
    exec('quote', 'disp', 3000);
    exec('leave', 'disp', 3000);
    //fade quote
    exec('quote', 'fade', 3050);
    exec('leave', 'fade', 3050);
    //spawn form
    exec('form', 'show', 3100);
    //fade form
    exec('form', 'fade', 3150);
    //fade formContent
    exec('formContent', 'fade', 3200);
    //star rise
    exec('starAnimate', 'rise', 4050);
    //starLayer show
    exec('starAnimate', 'show', 4050);
}