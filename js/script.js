/**
 * @author HERE AND NOW AI <info@hereandnowai.com>
 * @description Wedding website script with count-up timer, auto petals, audio on click, and scroll animations.
 */
(function ($) {
    "use strict";
      // Petals start automatically on load (as per user request)
      $('.sakura-falling').sakura();

})(jQuery);

// Music plays on any click (as per user request)
$(document).on('click', function(){
    var audio = document.getElementById("my_audio");
    if (audio && audio.paused) { // Check if audio element exists and is paused
      audio.muted = false; // Try to unmute on first click
      audio.play().catch(e => console.error("Audio play failed on click:", e));
    } else if (!audio) {
        console.error("Audio element #my_audio not found.");
    }
    // console.log('Document clicked - attempted audio play');
});

// Set the WEDDING date (the point to count *from*)
var weddingDate = new Date("Apr 18, 2025 00:00:00").getTime();

// Update the count UP timer every 1 second
var x = setInterval(function() {
    var now = new Date().getTime();

    // Calculate time elapsed SINCE the wedding date
    var timeSince = now - weddingDate;

    // Ensure timeSince doesn't show negative if viewed before the wedding date
    if (timeSince < 0) {
       timeSince = 0;
    }

    // Calculations using timeSince
    var days = Math.floor(timeSince / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeSince % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeSince % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeSince % (1000 * 60)) / 1000);

    var countdownElement = document.getElementById("countdown"); // Cache element
<<<<<<< HEAD
    if(countdownElement){
        // Update the display with the new structure (Units containing Number + Label)
        countdownElement.innerHTML =
            // Unit for Days
            "<div class='time-unit'>" +
                "<span class='time-number'>" + (days < 10 ? "0" + days : days) + "</span>" +
                "<span class='time-label'>Days</span>" +
            "</div>" +
            // Separator
            "<span class='time-separator'>:</span>" +
            // Unit for Hours
            "<div class='time-unit'>" +
                "<span class='time-number'>" + (hours < 10 ? "0" + hours : hours) + "</span>" +
                "<span class='time-label'>Hours</span>" +
            "</div>" +
             // Separator
            "<span class='time-separator'>:</span>" +
            // Unit for Minutes
            "<div class='time-unit'>" +
                "<span class='time-number'>" + (minutes < 10 ? "0" + minutes : minutes) + "</span>" +
                "<span class='time-label'>Minutes</span>" +
            "</div>" +
             // Separator
            "<span class='time-separator'>:</span>" +
            // Unit for Seconds
            "<div class='time-unit'>" +
                "<span class='time-number'>" + (seconds < 10 ? "0" + seconds : seconds) + "</span>" +
                "<span class='time-label'>Seconds</span>" +
            "</div>" +
            // Optional: Completion message
             "<div class='completion-message full-width'>Celebrating Together!</div>";
    }
=======
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
>>>>>>> origin/main

}, 1000);

// Console styles (remain the same)
var styles = [ 'background: linear-gradient(#D33106, #571402)', 'border: 4px solid #3E0E02', 'color: white', 'display: block', 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)', 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset', 'line-height: 40px', 'text-align: center', 'font-weight: bold', 'font-size: 32px' ].join(';');
var styles1 = [ 'color: #FF6C37', 'display: block', 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)', 'line-height: 40px', 'font-weight: bold', 'font-size: 32px' ].join(';');
var styles2 = [ 'color: teal', 'display: block', 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)', 'line-height: 40px', 'font-weight: bold', 'font-size: 32px' ].join(';');

// Console logs (Updated messages)
console.log('\n\n%c Wedding Date: 18th April, 2025!', styles);
console.log('%cCelebrating their journey!%c\n\nRegards: Capt Vijayshri & Ruthran RAGHAVAN', styles1, styles2);
console.log(`%cCounting the happy moments!\n\n`, 'color: yellow; background:tomato; font-size: 24pt; font-weight: bold');

// Attempt to play audio on load (as per the old version)
window.addEventListener('load', function() {
    var audio = document.getElementById("my_audio");
    if (audio) {
        // Don't try to unmute here, let the click handler do it if needed
        audio.play().catch(e => {
             console.log("Autoplay failed on load, waiting for click.", e);
             audio.muted = true; // Ensure it's muted if autoplay fails
        });
    }
});

// Scroll Animation Code
$(document).ready(function() {
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
                    // console.log('Element became visible:', entry.target); // Optional
                }
            });
        };

        const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

        // Select ALL elements with the 'animate-on-scroll' class
        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

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
        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
        elementsToAnimate.forEach(el => {
            if(el) el.classList.add('visible');
        });
    }
});