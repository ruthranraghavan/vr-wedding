/**
 * @author HERE AND NOW AI <info@hereandnowai.com>
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
      
})(jQuery);

$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Shaadi me zaroor aana');
});

// Set the date we're counting down to
var countDownDate = new Date("Apr 18, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("countdown").innerHTML =
        "<div class='timer-numbers'>" +
            "<span class='time-section'>" + (days < 10 ? "0" + days : days) + "</span>" +
            "<span class='separator'>:</span>" +
            "<span class='time-section'>" + (hours < 10 ? "0" + hours : hours) + "</span>" +
            "<span class='separator'>:</span>" +
            "<span class='time-section'>" + (minutes < 10 ? "0" + minutes : minutes) + "</span>" +
            "<span class='separator'>:</span>" +
            "<span class='time-section'>" + (seconds < 10 ? "0" + seconds : seconds) + "</span>" +
        "</div>" +
        "<div class='completion-message'>Love Knows No Boundaries</div>";


    // Optionally, if you still want to clear the interval when time's up,
    // you could check if distance < 0 and then simply stop updating:
    if (distance < 0) {
        clearInterval(x);
        // You could also change the countdown display if desired,
        // but the message remains visible.
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 18th April, 2025!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Capt Vijayshri & Ruthran RAGHAVAN', styles1, styles2);

console.log(
    `%cShaadi me zaroor aana!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)

// Add the load event listener at the end:
window.addEventListener('load', function() {
    var audio = document.getElementById("my_audio");
    audio.muted = false;
    audio.play();
  });