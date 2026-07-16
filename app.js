// State variables
let quizQuestions = [];
let currentIndex = 0;
let userAnswers = []; // selected option index per question, or null if unanswered

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const progressBarContainer = document.getElementById('progress-bar-container');
const progressBarFill = document.getElementById('progress-bar-fill');

const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');

const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const correctCountSpan = document.getElementById('correct-count');
const totalCountSpan = document.getElementById('total-count');
const gaugePercentage = document.getElementById('gauge-percentage');
const gaugeFill = document.getElementById('gauge-fill');
const resultHeading = document.getElementById('result-heading');

const sourceContainer = document.getElementById('source-container');
const sourceBtn = document.getElementById('source-btn');
const sourcePanel = document.getElementById('source-panel');

const themeToggleBtn = document.getElementById('theme-toggle');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
sourceBtn.addEventListener('click', toggleSourcePanel);
themeToggleBtn.addEventListener('click', toggleTheme);

// Theme handling: explicit user choice is saved in localStorage; with no
// explicit choice, the OS 'prefers-color-scheme' decides (handled in CSS/head script)
const prefersDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');

function getStoredTheme() {
  return localStorage.getItem('theme'); // 'light' | 'dark' | null
}

function getEffectiveTheme() {
  const stored = getStoredTheme();
  if (stored === 'light' || stored === 'dark') return stored;
  return prefersDarkQuery.matches ? 'dark' : 'light';
}

function updateThemeToggleIcon() {
  const isDark = getEffectiveTheme() === 'dark';
  themeToggleBtn.innerHTML = isDark
    ? '<i class="fa-solid fa-moon"></i>'
    : '<i class="fa-solid fa-sun"></i>';
}

function toggleTheme() {
  const next = getEffectiveTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeToggleIcon();
}

// Keep the icon in sync if the OS theme changes and the user hasn't overridden it
prefersDarkQuery.addEventListener('change', () => {
  if (!getStoredTheme()) updateThemeToggleIcon();
});

updateThemeToggleIcon();

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
  userAnswers = new Array(quizQuestions.length).fill(null);

  // 4. Switch screens
  welcomeScreen.classList.remove('active');
  resultScreen.classList.remove('active');
  quizScreen.classList.add('active');
  
  // Show progress indicator
  progressBarContainer.style.display = 'block';
  
  // 5. Display first question
  displayQuestion();
}

// Display current question (fresh or previously-answered, restoring state)
function displayQuestion() {
  sourceContainer.classList.remove('visible');
  sourcePanel.classList.remove('open');
  sourcePanel.innerHTML = '';
  delete sourcePanel.dataset.filled;
  sourceBtn.classList.remove('active');

  const currentQ = quizQuestions[currentIndex];

  // Update Question Text (Prepend clean sequential question number + total)
  questionText.innerHTML = `<span style="color:var(--primary); font-size:1.1rem; font-weight:700; display:block; margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;">Question ${currentIndex + 1} of ${quizQuestions.length}</span>${currentQ.question}`;

  // Update Progress Bar
  const progress = (currentIndex / quizQuestions.length) * 100;
  progressBarFill.style.width = `${progress}%`;

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

  // Previous button: hidden on the very first question
  prevBtn.classList.toggle('visible', currentIndex > 0);

  // Restore answered state if this question was already answered (navigated back to it)
  const previousAnswer = userAnswers[currentIndex];
  if (previousAnswer !== null && previousAnswer !== undefined) {
    renderAnsweredState(previousAnswer);
  } else {
    nextBtn.classList.remove('visible');
  }
}

// Render the disabled/colored option state for an already-answered question
function renderAnsweredState(selectedIdx) {
  const currentQ = quizQuestions[currentIndex];
  const correctIdx = currentQ.correct_index;
  const optionButtons = optionsList.getElementsByClassName('option-btn');

  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].disabled = true;
  }

  if (selectedIdx === correctIdx) {
    optionButtons[selectedIdx].classList.add('correct');
    document.getElementById(`icon-${selectedIdx}`).innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  } else {
    optionButtons[selectedIdx].classList.add('wrong');
    document.getElementById(`icon-${selectedIdx}`).innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    optionButtons[correctIdx].classList.add('correct');
    document.getElementById(`icon-${correctIdx}`).innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  }

  nextBtn.classList.add('visible');
  sourceContainer.classList.add('visible');
}

// Handle Option Selection
function selectOption(selectedIdx) {
  if (userAnswers[currentIndex] !== null && userAnswers[currentIndex] !== undefined) return;
  userAnswers[currentIndex] = selectedIdx;

  // Update progress bar to include completed current question
  const completedProgress = ((currentIndex + 1) / quizQuestions.length) * 100;
  progressBarFill.style.width = `${completedProgress}%`;

  renderAnsweredState(selectedIdx);
}

// Build and toggle the verification/source panel for the current question
function toggleSourcePanel() {
  const isOpen = sourcePanel.classList.toggle('open');
  sourceBtn.classList.toggle('active', isOpen);

  if (isOpen && !sourcePanel.dataset.filled) {
    const currentQ = quizQuestions[currentIndex];
    const verified = currentQ.verified;
    const source = currentQ.source;

    let originHtml = '';
    if (source) {
      if (source.type === 'pdf') {
        const pageText = source.page ? `, p. ${source.page}` : '';
        originHtml = `<span class="source-origin"><i class="fa-solid fa-file-pdf"></i> ${source.file}${pageText}</span>`;
      } else if (source.type === 'web' && source.url) {
        originHtml = `<span class="source-origin"><i class="fa-solid fa-globe"></i> <a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.url}</a></span>`;
      }
    }

    const badgeHtml = verified
      ? `<span class="source-badge verified"><i class="fa-solid fa-shield-halved"></i> Verified</span>`
      : `<span class="source-badge unverified"><i class="fa-solid fa-triangle-exclamation"></i> Not verified</span>`;

    const changeHtml = currentQ.change_note
      ? `<div class="change-banner"><i class="fa-solid fa-triangle-exclamation"></i> <strong>Answer corrected from the original quiz.</strong> ${currentQ.change_note}</div>`
      : '';

    const explanationHtml = currentQ.explanation
      ? `<div class="explanation-block"><h4><i class="fa-solid fa-graduation-cap"></i> Explanation</h4><p>${currentQ.explanation}</p></div>`
      : '';

    const noteHtml = source && source.note ? `<p class="source-note">${source.note}</p>` : '';

    sourcePanel.innerHTML = `
      <div class="source-header">${badgeHtml}${originHtml}</div>
      ${noteHtml}
      ${changeHtml}
      ${explanationHtml}
    `;
    sourcePanel.dataset.filled = 'true';
  }
}

// Move to previous question
function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    displayQuestion();
  }
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
  progressBarContainer.style.display = 'none';
  
  resultScreen.classList.add('active');
  
  // Calculate percentage and update labels
  const total = quizQuestions.length;
  const score = userAnswers.reduce((count, answer, i) => (
    answer === quizQuestions[i].correct_index ? count + 1 : count
  ), 0);
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
