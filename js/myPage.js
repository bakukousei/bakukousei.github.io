$(document).ready(function () {
    $('#fullpage').fullpage();
    setInterval(function () { $('.page2').fullpage.moveSlideRight(); }, 3000);
});
