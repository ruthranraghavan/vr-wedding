/**
 * @author HERE AND NOW AI <info@hereandnowai.com>
 */
(function ($) {
    "use strict";
      // Petals start automatically on load
      $('.sakura-falling').sakura();

})(jQuery);

// Music plays on any click
$(document).on('click', function(){
    var audio = document.getElementById("my_audio");
    if (audio) { // Check if audio element exists
      audio.play().catch(e => console.error("Audio play failed on click:", e));
    }
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

    var countdownElement = document.getElementById("countdown"); // Cache element
        // --- START: Replace the block starting from this line ---
        if(countdownElement){
            // Check if timer expired (handle this first)
            if (distance < 0) {
                clearInterval(x);
                countdownElement.innerHTML = "<div class='completion-message'>The big day is here!</div>";
            } else {
                // Build the new HTML with labels
                countdownElement.innerHTML =
                    "<div class='timer-numbers'>" +
                        "<div class='time-part'>" + // Wrap number and label for Days
                            "<span class='time-section'>" + (days < 10 ? "0" + days : days) + "</span>" +
                            "<span class='time-label'>Days</span>" +
                        "</div>" +
                        "<span class='separator'>:</span>" +
                        "<div class='time-part'>" + // Wrap number and label for Hours
                            "<span class='time-section'>" + (hours < 10 ? "0" + hours : hours) + "</span>" +
                            "<span class='time-label'>Hours</span>" +
                        "</div>" +
                        "<span class='separator'>:</span>" +
                        "<div class='time-part'>" + // Wrap number and label for Minutes
                            "<span class='time-section'>" + (minutes < 10 ? "0" + minutes : minutes) + "</span>" +
                            "<span class='time-label'>Minutes</span>" +
                        "</div>" +
                        "<span class='separator'>:</span>" +
                        "<div class='time-part'>" + // Wrap number and label for Seconds
                            "<span class='time-section'>" + (seconds < 10 ? "0" + seconds : seconds) + "</span>" +
                            "<span class='time-label'>Seconds</span>" +
                        "</div>" +
                    "</div>" +
                    // Keep the message below
                    "<div class='completion-message'>Love Knows No Boundaries</div>";
            }
        }
        // --- END: Replace the block ending just above this line ---

    // Optionally, if you still want to clear the interval when time's up,
    // you could check if distance < 0 and then simply stop updating:
    if (distance < 0) {
        clearInterval(x);
        if (countdownElement) {
             countdownElement.innerHTML = "<div class='completion-message'>The big day is here!</div>";
        }
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

// Attempt to play audio on load (may be blocked by browser)
window.addEventListener('load', function() {
    var audio = document.getElementById("my_audio");
    if (audio) { // Check if audio element exists
      audio.muted = false; // Try to unmute
      audio.play().catch(e => console.error("Audio play failed on load:", e));
    }
});


// --- ADD THIS BLOCK AT THE END FOR SCROLL ANIMATION ---
$(document).ready(function() {
    // --- Intersection Observer for Scroll Animations ---
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once visible
                    console.log('Element became visible:', entry.target);
                }
            });
        };

        const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

        // Select the elements to observe (Using vanilla JS here is fine)
        const elementsToAnimate = document.querySelectorAll('.title h1, .title h2');

        elementsToAnimate.forEach(el => {
            if (el) {
                scrollObserver.observe(el);
            } else {
                console.warn("Could not find element(s) for scroll animation observer.");
            }
        });
    } else {
        // Fallback for older browsers: just make elements visible immediately
        console.log("Intersection Observer not supported, showing elements immediately.");
        const elementsToAnimate = document.querySelectorAll('.title h1, .title h2');
        elementsToAnimate.forEach(el => {
            if(el) el.classList.add('visible');
        });
    }
    // --- End of Intersection Observer ---
});
// --- END OF ADDED BLOCK ---