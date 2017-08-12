if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 400);

}

var x = 0;

var titleText = [ "d", "de", "dew", "dewc", "dewci", "dewcio", "dewcio.", "dewcio.c", "dewcio.cc", "dewcio.c", "dewcio. "dewcio", "dewci", "dewc", "dew", "de", "d" ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}