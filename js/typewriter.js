var text = $('.card__title').text();

var length = text.length;
var timeOut;
var character = 0;


(function typeWriter() {
    timeOut = setTimeout(function() {
        character++;
        var type = text.substring(0, character);
        $('.card__title').text(type);
        typeWriter();

        if (character == length) {
            clearTimeout(timeOut);
        }

    }, 180);
}());
