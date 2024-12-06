const textArray = ["Rahul Pro", "Coder", "Student", "Rahul"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        document.querySelector(".typed-text").textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        document.querySelector(".typed-text").textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(document.querySelector(".typed-text")) {
        setTimeout(type, newTextDelay + 250);
    }
    
    // Cursor effect
    document.body.classList.add('has-cursor');
    
    document.addEventListener('mousemove', function(e) {
        document.body.style.setProperty('--cursor-x', e.clientX + 'px');
        document.body.style.setProperty('--cursor-y', e.clientY + 'px');
        
        const cursor = document.body;
        cursor.style.setProperty('--cursor-x', e.clientX + 'px');
        cursor.style.setProperty('--cursor-y', e.clientY + 'px');
        
        // Update the pseudo-element position
        document.body.style.setProperty('background-image', 
            `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, 
            rgba(0, 122, 255, 0.15) 0%, 
            transparent 50%)`
        );
    });
}); 