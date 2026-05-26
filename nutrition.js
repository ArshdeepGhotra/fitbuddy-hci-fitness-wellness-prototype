console.log("Nutrition JS loaded");

document.addEventListener('DOMContentLoaded', () => {

    // Function to handle the opening of different sections
    function openSection(sectionId, sectionTitle) {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.style.display = 'none';
            section.classList.remove('show');
        });

        // Show the selected section
        const sectionElement = document.getElementById(sectionId);
        const subHeader = document.getElementById('sub-header');

        // Set the sub-header to the title of the clicked section
        subHeader.textContent = sectionTitle;

        // Use a timeout to ensure the CSS transition is triggered
        setTimeout(() => {
            sectionElement.style.display = 'block';
            requestAnimationFrame(() => {
                sectionElement.classList.add('show');
            });
        }, 10);
    }

    document.getElementById('nutrition-quiz-tile').addEventListener('click', () => {
        openSection('nutrition-quiz-section', 'Nutrition Quiz');
    });

    document.getElementById('recipe-finder-tile').addEventListener('click', () => {
        openSection('recipe-finder-section', 'Recipe Finder');
    });

    document.getElementById('nutrient-tracker-tile').addEventListener('click', () => {
        openSection('nutrient-tracker-section', 'Nutrient Tracker');
    });

    document.getElementById('hydration-tracker-tile').addEventListener('click', () => {
        openSection('hydration-tracker-section', 'Hydration Tracker');
    });

    document.getElementById('educational-section-tile').addEventListener('click', () => {
        openSection('educational-section', 'Educational Section');
    });
});


document.addEventListener('DOMContentLoaded', () => {

    function provideFeedback(questionNumber, userAnswer) {
        const correctAnswers = {
            'question1': 'b', // To provide energy
            'question2': 'a', // Vitamin A
            'question3': 'a', // Protein
            'question4': 'a', // Calcium
            'question5': 'a', // To promote heart health
            'question6': 'a', // Heart health
            'question7': 'c', // The impact of food on blood sugar levels
            'question8': 'a', // A protein that contains all essential amino acids
            'question9': 'a', // Vitamin C
            'question10': 'a', // Bacteria that are beneficial for digestive health
            'question11': 'c', // Trans fat
            'question12': 'a', // Glucose
            'question13': 'c', // Animal products
            'question14': 'b', // Vitamin K
            'question15': 'b', // Low-sodium diet
            'question16': 'b', // Mineral
            'question17': 'b', // Vitamin D
            'question18': 'b', // Fruits and Vegetables
            'question19': 'c', // Combat free radicals in the body
            'question20': 'a'  // As a source of energy
        };

        const feedbackElement = document.getElementById(`feedback-${questionNumber}`);
        if (userAnswer === correctAnswers[questionNumber]) {
            feedbackElement.textContent = 'Correct!';
            feedbackElement.style.color = 'green';
        } else {
            feedbackElement.textContent = 'Incorrect.';
            feedbackElement.style.color = 'red';
        }
    }

    document.querySelectorAll('.quiz-question input[type="radio"]').forEach(input => {
        input.addEventListener('change', (event) => {
            const questionNumber = event.target.name;
            const userAnswer = event.target.value;
            provideFeedback(questionNumber, userAnswer);
        });
    });

    

});




document.addEventListener('DOMContentLoaded', () => {
    const tiles = document.querySelectorAll('.recipe-tile');

    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            const details = tile.querySelector('.recipe-details');
            // Check if the clicked tile is already open
            const isOpen = details.style.display === 'block';

            // Close all open details
            document.querySelectorAll('.recipe-details').forEach(detail => {
                detail.style.display = 'none';
            });

            // If the clicked tile was not already open, open it
            if (!isOpen) {
                details.style.display = 'block';
            }
        });
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const foodDatabase = {
        apple: 95,
        egg: 155,
        banana: 89,
        orange: 47,
        rice: 130,
        chicken_breast: 165,
        salmon: 208,
        broccoli: 34,
        almonds: 579,
        yogurt: 59,
        cheese: 402,
        spinach: 23,
        bread: 265,
        pasta: 131,
        potato: 77,
        carrot: 41,
        tomato: 18,
        cucumber: 15,
        peanut_butter: 588,
    };
    
    const totalCaloriesElement = document.getElementById('total-calories');
    const foodListElement = document.getElementById('food-list') || createFoodListElement();

    // Helper functions
    function updateTotalCalories(calories) {
        let totalCalories = parseInt(totalCaloriesElement.textContent) || 0;
        totalCalories += calories;
        totalCaloriesElement.textContent = totalCalories;
        localStorage.setItem('totalCalories', totalCalories);
    }

    function resetEntries() {
        localStorage.removeItem('totalCalories');
        totalCaloriesElement.textContent = '0';
        foodListElement.innerHTML = ''; 
    }

    function appendFoodItemToList(item, calories, servings) {
        const listItem = document.createElement('li');
        listItem.textContent = `${servings} serving(s) of ${item} added (${calories * servings} kcal)`;
        foodListElement.appendChild(listItem);
    }

    function createFoodListElement() {
        const newList = document.createElement('ul');
        newList.id = 'food-list';
        document.getElementById('nutrient-tracker-section').appendChild(newList);
        return newList;
    }

    if (localStorage.getItem('totalCalories')) {
        totalCaloriesElement.textContent = localStorage.getItem('totalCalories');
    }

    // Event listeners
    document.getElementById('food-entry-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const foodItem = document.getElementById('food-item').value;
        const servings = parseInt(document.getElementById('servings').value, 10);
        const calories = foodDatabase[foodItem] * servings;
        
        updateTotalCalories(calories);
        appendFoodItemToList(foodItem, foodDatabase[foodItem], servings);
    });
    
    document.getElementById('reset-entries').addEventListener('click', resetEntries);
});




document.addEventListener('DOMContentLoaded', () => {
    const waterVolumeInput = document.getElementById('water-container-volume');
    let currentIntake = 0;
    const dailyGoal = 2000;
    const progressBar = document.getElementById('progress-bar');
    const currentIntakeDisplay = document.getElementById('current-intake');

    document.getElementById('add-water').addEventListener('click', () => {
        updateIntake('add');
    });

    document.getElementById('subtract-water').addEventListener('click', () => {
        updateIntake('subtract');
    });

    function updateIntake(action) {
        const volume = parseInt(waterVolumeInput.value, 10) || 0;
        if (action === 'add') {
            currentIntake += volume;
        } else if (action === 'subtract') {
            currentIntake = Math.max(currentIntake - volume, 0);
        }
        
        currentIntakeDisplay.textContent = `Total Intake: ${currentIntake} ml`;
        updateProgressBar(currentIntake, dailyGoal);
    }

    function updateProgressBar(current, goal) {
        const percentage = Math.min((current / goal) * 100, 100);
        progressBar.style.width = `${percentage}%`;
        progressBar.classList.remove('animate'); // Remove any previous animation class
    
        // Re-add the class to trigger the animation again
        setTimeout(() => progressBar.classList.add('animate'), 0);
    }
    
});

const buttons = document.querySelectorAll('.ripple-effect');

buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});







