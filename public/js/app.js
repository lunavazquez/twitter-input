var limit = 140;
var counter = 0;
var counterSpan = document.getElementById('counter');
var text = document.getElementById('text').addEventListener('input', function(event) {
    var stringSize = event.target.value.length;
    counter = limit - stringSize;
    counterSpan.innerHTML = counter;
});
