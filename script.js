document.addEventListener('DOMContentLoaded', () => {

    const accordionButtons = document.querySelectorAll('.accordion');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const arrow = button.querySelector('.arrow');
            const panel = button.nextElementSibling;

            // Toggle the display of the panel and the rotation of the arrow
            panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
            arrow.style.transform = panel.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0)';
        });
    });

     
     const contentMapping = {
            'nav-chest': [
                {
                    text: ' Bench Press - The bench press is a classic chest exercise that targets the pectoralis major as well as the triceps and deltoids.',
                    img: '200.webp' 
                },
                {
                    text: ' Push-ups - Push-ups are a versatile exercise that can be modified to increase difficulty or target different muscle groups.',
                    img: 'giphy1.gif'                 },
                {
                    text: ' Incline Dumbbell Press - Targeting the upper chest, the incline press variation emphasizes the clavicular head of the pectoralis major.',
                    img: 'incline bench.gif'
                },
                {
                    text: ' Chest Fly - Chest fly exercises isolate the pectoral muscles, stretching them at the bottom of the movement and contracting them at the top.',
                    img: 'chest-fly-dumbells.gif' 
                },
                {
                    text: ' Cable Crossovers - Cable Crossovers are a dynamic exercise that targets the pectoral muscles from a variety of angles, promoting muscle growth and definition.',
                    img: 'cablecrossovers.gif'                
                }
            ],
            
        'nav-shoulders': [{
            text: 'Shoulder Press - Targets the entire shoulder region and enhances overhead strength.',
            img: 'shoulderpress.gif' 
        },
        {
            text:'Lateral Raise - Isolates the lateral part of the shoulder, promoting width.',
            img:'lateral-raise.gif'
        },
        {
            text:'Front Raise - Targets the anterior (front) deltoids, increasing front shoulder strength.',
            img:'frontraise.gif'
        },
        {
            text:'Reverse Fly - Emphasizes the rear deltoids and upper back, improving posture.',
            img:'rear-raise.gif'
        },
        {
            text:'Shrugs - Focuses on the upper trapezius muscles, enhancing neck and shoulder strength.',
            img:'shrug.gif'
        }
        ],
        'nav-back':[{
            text: 'Pull-Ups - A powerful compound exercise that increases upper body and back strength.',
            img: 'pull-ups.gif' 
        },
        {
            text: 'Bent Over Row - Targets the muscles of the back and increases overall back thickness.',
            img: 'bent-over.gif' 
        },
        {
            text: 'Deadlift - A key compound exercise that engages the lower and upper back, glutes, and hamstrings.',
            img: 'deadlift.gif' 
        },
        {
            text: 'Lat Pulldown - Focuses on the latissimus dorsi muscles, enhancing back width.',
            img: 'latpulldown.gif' 
        },
        {
            text: 'Seated Row - Strengthens the muscles of the back, including the rhomboids and latissimus dorsi.',
            img: 'cable-row-back.gif' 
        },
    ],
    'nav-biceps':[
        {
            text: 'Bicep Curl - A fundamental exercise for bicep strength and muscle building.',
            img: 'biceps-curl.gif' 
        },
        {
            text: 'Hammer Curl - Targets the biceps and the forearms, promoting muscle growth and strength.',
            img: 'hammer-curl.gif' 
        },
        {
            text: 'Preacher Curl - Isolates the biceps, ensuring focused muscle engagement and growth.',
            img: 'preacher-curl.gif' 
        },
        {
            text: 'Concentration Curl - Maximizes bicep peak development by isolating the muscle during the curl.',
            img: 'concentration-curl.gif' 
        },
        {
            text: 'Cable Curl - Provides constant tension on the biceps, enhancing muscle stimulation and growth.',
            img: 'cable-curl.gif' 
        }
    ],
    'nav-triceps': [
        {
            text: 'Tricep Dip - Engages the triceps for improved upper arm strength and definition.',
            img: 'tricep-dip.gif' 
        },
        {
            text: 'Skull Crushers - Targets the triceps through elbow extension, enhancing tricep mass.',
            img: 'skull-crushers.gif' 
        },
        {
            text: 'Tricep Extension - Isolates the triceps, improving muscle tone and strength.',
            img: 'tricep-extension.gif' 
        },
        {
            text: 'Close-Grip Bench Press - Focuses on the triceps, with secondary chest and shoulder engagement.',
            img: 'close-grip-bench-press.gif' 
        },
        {
            text: 'Tricep Kickback - Works each tricep independently, ensuring balanced strength and definition.',
            img: 'tricep-kickback.gif' 
        }
    ],

    'nav-legs': [
        {
            text: 'Squats - A fundamental compound exercise that targets the lower body, strengthening the quads, hamstrings, and glutes.',
            img: 'squats.gif' 
        },
        {
            text: 'Leg Press - Focuses on the quadriceps, hamstrings, and glutes, allowing for targeted strength and muscle building.',
            img: 'leg-press.gif' 
        },
        {
            text: 'Deadlift - Engages the entire lower body, including the glutes, hamstrings, and lower back, enhancing overall strength.',
            img: 'deadlift.gif' 
        },
        {
            text: 'Lunges - Improves lower body strength and flexibility, targeting the quads, hamstrings, and glutes.',
            img: 'lunges.gif' 
        },
        {
            text: 'Leg Extension - Isolates the quadriceps, providing targeted strengthening of the front thigh muscles.',
            img: 'leg-extension.gif' 
        }
    ],

    'nav-abs': [
        {
            text: 'Crunches - A core strengthening exercise focusing on the abdominal muscles.',
            img: 'crunches.gif' 
        },
        {
            text: 'Leg Raises - Targets the lower abs and improves core stability and strength.',
            img: 'leg-raises.gif' 
        },
        {
            text: 'Plank - A fundamental core exercise that improves stability and engages the whole body.',
            img: 'plank.gif' 
        },
        {
            text: 'Russian Twists - Enhances oblique strength and contributes to a stronger, more stable core.',
            img: 'russian-twist.gif' 
        },
        {
            text: 'Mountain Climbers - Combines core strengthening with cardiovascular endurance, targeting multiple muscle groups.',
            img: 'mountain-climbers.gif' 
        }
    ],

    'nav-forearms': [
        {
            text: 'Wrist Curls - Targets the inner forearm muscles, enhancing wrist and grip strength.',
            img: 'wrist-curls.gif' 
        },
        {
            text: 'Reverse Wrist Curls - Strengthens the outer forearm muscles, improving wrist stability and strength.',
            img: 'reverse-wrist-curls.gif' 
        },
        {
            text: 'Hammer Curls - Works on the brachioradialis, a major muscle of the forearm, along with biceps and grip strength.',
            img: 'hammer-curls.gif' 
        },
        {
            text: 'Farmers Walk - Enhances grip strength, forearm muscles, and overall upper body stamina.',
            img: 'farmers-walk.gif' 
        },
        {
            text: 'Grip Squeezes - Improves grip strength and endurance by targeting the hand and forearm muscles.',
            img: 'grip-squeezes.gif' 
        }
    ],

    'nav-flexibility': [
        {
            text: 'Toe Touch - Enhances hamstring flexibility and helps loosen up the lower back.',
            img: 'toe-touch.gif' 
        },
        {
            text: 'Standing Hamstring Stretch - Targets the hamstrings, promoting flexibility and reducing lower back pain.',
            img: 'standing-hamstring-stretch.gif' 
        },
        {
            text: 'Triceps Stretch - Stretches the triceps and shoulders, improving upper body flexibility.',
            img: 'triceps-stretch.gif' 
        },
        {
            text: 'Butterfly Stretch - Opens up the hips and thighs, improving the flexibility of the lower body.',
            img: 'butterfly-stretch.gif' 
        },
        {
            text: 'Cobra Pose - Strengthens the spine, opens up the chest and shoulders, and enhances flexibility.',
            img: 'cobra-pose.gif' 
        },
        {
            text: 'Chest Stretch - Relieves tension in the chest and shoulders, promoting better posture and flexibility.',
            img: 'chest-stretch.gif' 
        }
    ],

    };

    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Extract the category from the link's id attribute
            const category = this.id;

            // Update the content display area with the content mapping data
            updateContent(category);
        });
    });


    function updateContent(category) {
        const content = contentMapping[category];
        const displayArea = document.getElementById('content-display-area');

        // Reset displayArea's innerHTML
        displayArea.innerHTML = '';

        if (Array.isArray(content) && content.length) {
            content.forEach(item => {
                displayArea.innerHTML += `
                <div>
                <p>${item.text}</p>
                <img src="${item.img}" alt="${item.text}" style="max-width:100%; display: block; margin: 0 auto;">
            </div>
                `;
            });
        } else {
            displayArea.innerHTML = `<p>No content available for this category.</p>`;
        }
        
        // Apply the fade-in animation
        applyFadeInAnimation(displayArea);
    }

    // Function to manage the fade-in animation
    function applyFadeInAnimation(element) {
        element.classList.remove('fade-in');
        void element.offsetWidth; // Trigger reflow
        element.classList.add('fade-in');

        element.addEventListener('animationend', () => {
            element.classList.remove('fade-in');
        }, { once: true });
    }
    });

    const tiles = document.querySelectorAll('.category-tile');
    const contentSections = document.querySelectorAll('.exercise-content');
    const displayArea = document.getElementById('content-display-area');

    tiles.forEach(tile => {
        tile.addEventListener('click', function(){
            contentSections.forEach(section =>{
                section.style.display = 'none';
            });

            const category = this.id;
            const activeContent = document.getElementById(category + '-content');

            if(activeContent){
                displayArea.innerHTML = '';
                activeContent.style.display = 'block';
            }else {
                // Fallback content if a matching section is not found
                displayArea.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)} Exercises</h2>` +
                                        `<p>Content for ${category.charAt(0).toUpperCase() + category.slice(1)} will be shown here.</p>`;
            }

            displayArea.classList.remove('fade-in');

            void displayArea.offsetWidth;
            displayArea.classList.add('fade-in');
            
         });

            
     });
    

    const workoutItems = document.querySelectorAll('.workout-item');

    workoutItems.forEach(item => {
        item.addEventListener('click', function() {
            const workoutPage = this.textContent.toLowerCase().replace(/ /g, '-') + '.html';
            window.location.href = workoutPage;
        });
    });


    document.getElementById('workout').addEventListener('click', () => {
        window.location.href = 'workout.html'; // Redirects to 'workout.html'
        
    });

    document.getElementById('nutrition').addEventListener('click', () => {
        window.location.href = 'nutrition.html'; // Redirects to 'nutrition.html'
    });

    document.getElementById('leaderboard').addEventListener('click', () => {
        window.location.href = 'leaderboard.html'; // Redirects to 'leaderboard.html'
    });

    document.getElementById('mental-health').addEventListener('click', () => {
        window.location.href = 'mentalhealth.html'; // Redirects to 'mental-health.html'
    });

    document.getElementById('edu-articles').addEventListener('click', () => {
        window.location.href = 'edu-articles.html'; // Redirects to 'edu-articles.html'
    });

    document.getElementById('workout-item').addEventListener('click', () =>{
        window.location.href= 'workout-item';
    } )

  
    var dropdowns = document.getElementsByClassName("dropdown");
    var i;

    for (i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener("click", function (event) {
            event.stopPropagation(); 
            closeAllDropdowns(this); 
            this.querySelector('.dropdown-content').classList.toggle("show");
        });
    }

    function closeAllDropdowns(currentDropdown = null) {
        var dropdownContents = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdownContents.length; i++) {
            var openDropdown = dropdownContents[i];
            if (currentDropdown) {
                if (openDropdown.classList.contains('show') && openDropdown !== currentDropdown.querySelector('.dropdown-content')) {
                    openDropdown.classList.remove('show');
                }
            } else if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropdown *')) { 
            closeAllDropdowns();
        }
    };

    const navbarLinks = document.querySelectorAll('.navbar a');
    
    
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            
            const displayArea = document.getElementById('content-display-area');
            
            
            displayArea.innerHTML = '';
            
            
            displayArea.innerHTML = `<p>Content for ${this.textContent} will be shown here after you click on the navbar.</p>`;
            
            
            displayArea.classList.add('fade-in');
            
            
            displayArea.addEventListener('animationend', () => {
                displayArea.classList.remove('fade-in');
            }, { once: true });
        });
    });

