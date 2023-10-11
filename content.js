'use strict';

// Add a delay to ensure the page is fully loaded
setTimeout(function() {
    // Find the anchor element with the onclick attribute
    var triggerElement = document.querySelector('a[onclick="toggleMaxWidth()"]');
    if (triggerElement) {
        triggerElement.click();
    }
}, 0); // Adjust the delay as needed

