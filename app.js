// State variables
let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let hasAnswered = false;

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const progressInfo = document.getElementById('progress-info');
const progressBarContainer = document.getElementById('progress-bar-container');
const progressBarFill = document.getElementById('progress-bar-fill');

const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const correctCountSpan = document.getElementById('correct-count');
const totalCountSpan = document.getElementById('total-count');
const gaugePercentage = document.getElementById('gauge-percentage');
const gaugeFill = document.getElementById('gauge-fill');
const resultHeading = document.getElementById('result-heading');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Helper function to shuffle array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Start Quiz function
function startQuiz() {
  // Get selected options from DOM
  const questionMode = document.querySelector('input[name="question-mode"]:checked').value;
  const optionMode = document.querySelector('input[name="option-mode"]:checked').value;

  // 1. Prepare questions list
  let activeQuestions = [...allQuestions];
  
  if (questionMode === 'random-all') {
    activeQuestions = shuffleArray(activeQuestions);
  } else if (questionMode === 'random-15') {
    activeQuestions = shuffleArray(activeQuestions).slice(0, 15);
  } // 'pdf-order' stays as is
  
  // 2. Prepare option order for each question
  if (optionMode === 'opt-random') {
    activeQuestions = activeQuestions.map(q => {
      // Only shuffle if it has more than 2 options (i.e. not True/False)
      if (q.options.length > 2) {
        const mapped = q.options.map((text, idx) => ({
          text: text,
          isCorrect: idx === q.correct_index
        }));
        const shuffledMapped = shuffleArray(mapped);
        const newOptions = shuffledMapped.map(item => item.text);
        const newCorrectIndex = shuffledMapped.findIndex(item => item.isCorrect);
        return {
          ...q,
          options: newOptions,
          correct_index: newCorrectIndex
        };
      }
      return q;
    });
  }

  quizQuestions = activeQuestions;
  
  // 3. Reset state
  currentIndex = 0;
  score = 0;
  
  // 4. Switch screens
  welcomeScreen.classList.remove('active');
  resultScreen.classList.remove('active');
  quizScreen.classList.add('active');
  
  // Show progress indicators
  progressInfo.style.display = 'block';
  progressBarContainer.style.display = 'block';
  
  // 5. Display first question
  displayQuestion();
}

// Display current question
function displayQuestion() {
  hasAnswered = false;
  nextBtn.classList.remove('visible');
  
  const currentQ = quizQuestions[currentIndex];
  
  // Update Question Text (Prepend clean sequential question number)
  questionText.innerHTML = `<span style="color:var(--primary); font-size:1.1rem; font-weight:700; display:block; margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;">Question ${currentIndex + 1}</span>${currentQ.question}`;
  
  // Update Progress Info & Progress Bar (before selection animation)
  progressInfo.textContent = `Q ${currentIndex + 1} / ${quizQuestions.length}`;
  const initialProgress = (currentIndex / quizQuestions.length) * 100;
  progressBarFill.style.width = `${initialProgress}%`;
  
  // Populate Options
  optionsList.innerHTML = '';
  currentQ.options.forEach((optionText, idx) => {
    const optionBtn = document.createElement('button');
    optionBtn.className = 'option-btn';
    optionBtn.type = 'button';
    
    // Prefix character (A, B, C, D)
    const prefix = String.fromCharCode(65 + idx);
    
    optionBtn.innerHTML = `
      <span class="option-prefix">${prefix}</span>
      <span class="option-text-span">${optionText}</span>
      <span class="option-icon" id="icon-${idx}"></span>
    `;
    
    optionBtn.addEventListener('click', () => selectOption(idx));
    optionsList.appendChild(optionBtn);
  });
}

// Handle Option Selection
function selectOption(selectedIdx) {
  if (hasAnswered) return;
  hasAnswered = true;
  
  const currentQ = quizQuestions[currentIndex];
  const correctIdx = currentQ.correct_index;
  const optionButtons = optionsList.getElementsByClassName('option-btn');
  
  // Disable all options
  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].disabled = true;
  }
  
  // Visual feedback check
  if (selectedIdx === correctIdx) {
    score++;
    optionButtons[selectedIdx].classList.add('correct');
    document.getElementById(`icon-${selectedIdx}`).innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  } else {
    // Selected wrong one
    optionButtons[selectedIdx].classList.add('wrong');
    document.getElementById(`icon-${selectedIdx}`).innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    
    // Highlight correct one
    optionButtons[correctIdx].classList.add('correct');
    document.getElementById(`icon-${correctIdx}`).innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  }
  
  // Update progress bar to include completed current question
  const completedProgress = ((currentIndex + 1) / quizQuestions.length) * 100;
  progressBarFill.style.width = `${completedProgress}%`;
  
  // Reveal next button
  nextBtn.classList.add('visible');
}

// Move to next question or finish quiz
function nextQuestion() {
  currentIndex++;
  if (currentIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

// Display results dashboard
function showResults() {
  quizScreen.classList.remove('active');
  progressInfo.style.display = 'none';
  progressBarContainer.style.display = 'none';
  
  resultScreen.classList.add('active');
  
  // Calculate percentage and update labels
  const total = quizQuestions.length;
  correctCountSpan.textContent = score;
  totalCountSpan.textContent = total;
  
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  gaugePercentage.textContent = `${percentage}%`;
  
  // Animating the radial SVG gauge (440 is the circle circumference)
  const offset = 440 - (440 * percentage) / 100;
  
  // Small timeout to allow transition to render properly
  setTimeout(() => {
    gaugeFill.style.strokeDashoffset = offset;
  }, 100);
  
  // Update custom success heading
  if (percentage === 100) {
    resultHeading.innerHTML = 'Perfect Score! 🌟';
  } else if (percentage >= 80) {
    resultHeading.innerHTML = 'Excellent Job! 🎉';
  } else if (percentage >= 50) {
    resultHeading.innerHTML = 'Good Effort! 👍';
  } else {
    resultHeading.innerHTML = 'Need More Practice! 📚';
  }
}

// Restart Quiz function
function restartQuiz() {
  resultScreen.classList.remove('active');
  welcomeScreen.classList.add('active');
}
