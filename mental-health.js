console.log("JS loaded");

document.addEventListener('DOMContentLoaded', () => {

    // Function to open a section
    function openSection(sectionId, sectionTitle) {
        document.querySelectorAll('.section').forEach(section => {
            if (section.id !== sectionId) {
                section.classList.remove('show');
                section.style.display = 'none';
            }
        });
    
        const sectionElement = document.getElementById(sectionId);
        const subHeader = document.getElementById('sub-header');
    
        subHeader.style.display = 'none';
    
        if (window.activeSectionTimeout) {
            clearTimeout(window.activeSectionTimeout);
        }
    
        window.activeSectionTimeout = setTimeout(() => {
            if (!sectionElement.classList.contains('show')) {
                // Update the sub-header with the section title and show it
                subHeader.innerText = sectionTitle;
                subHeader.style.display = 'block';
    
                // Show the selected section with fade-in effect
                sectionElement.style.display = 'block';
                requestAnimationFrame(() => {
                    sectionElement.classList.add('show');
                });
            }
        }, 10); 
    }
    

    // Event listeners
    document.getElementById('guided-meditation').addEventListener('click', () => {
        openSection('guided-meditation-section', 'Guided Meditation');
    });

    document.getElementById('breathing-exercises').addEventListener('click', () => {
        openSection('breathing-exercises-section', 'Breathing Exercises');
    });

    document.getElementById('resources').addEventListener('click', () => {
        openSection('resources-section', 'Resources');
    });

    

    document.getElementById('personal-journal').addEventListener('click', () => {
        openSection('personal-journal-section', 'Personal Journal');
    });

});




let countdown;
let countdownTime = 0;

function setTime(seconds) {
  countdownTime = seconds;
  displayTimeLeft(countdownTime);
}

function startTimer() {
    if (isPaused) {
      // If the timer is paused, resume from where it was paused
      isPaused = false;
      document.getElementById('pause-timer').textContent = 'Pause';
    } else {
      // If the timer is not paused, start from the countdownTime
      clearInterval(countdown);
      const now = Date.now();
      const then = now + countdownTime * 1000;
      displayTimeLeft(countdownTime);
      
      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        
        // Check if we should stop it
        if(secondsLeft < 0) {
          clearInterval(countdown);
          document.getElementById('end-sound').play();
          return;
        }
        
        // Display it
        displayTimeLeft(secondsLeft);
      }, 1000);
    }
  }
  

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.getElementById('timer').textContent = display;
  document.title = display;
}


let isPaused = false;

function pauseTimer() {
  if (!isPaused) {
    clearInterval(countdown);
    document.getElementById('pause-timer').textContent = 'Resume';
  } else {
    startTimer();
    document.getElementById('pause-timer').textContent = 'Pause';
  }
  isPaused = !isPaused;
}

function resetTimer() {
  clearInterval(countdown);
  countdownTime = 0;
  displayTimeLeft(countdownTime);
  document.getElementById('pause-timer').textContent = 'Pause';
  isPaused = false;
}



document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
      const panel = button.nextElementSibling;

      button.classList.toggle("active");
      if (panel.style.display === "block") {
          panel.style.display = "none";
      } else {
          panel.style.display = "block";
      }
  });
});