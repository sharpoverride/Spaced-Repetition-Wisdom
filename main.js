// Main Application Logic for Philosophy SRS App

class PhilosophySRS {
  constructor() {
    this.currentCard = null;
    this.sessionCards = [];
    this.sessionStats = {
      completed: 0,
      again: 0,
      hard: 0,
      good: 0,
      easy: 0
    };
    this.isCardFlipped = false;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadInitialState();
    this.updateDashboard();
  }

  setupEventListeners() {
    // Navigation
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-action]')) {
        this.handleAction(e.target.dataset.action, e.target);
      }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (this.currentCard) {
        switch (e.key) {
          case ' ':
            e.preventDefault();
            this.flipCard();
            break;
          case '1':
            this.rateCard('again');
            break;
          case '2':
            this.rateCard('hard');
            break;
          case '3':
            this.rateCard('good');
            break;
          case '4':
            this.rateCard('easy');
            break;
        }
      }
    });

    // Card flip on click
    document.addEventListener('click', (e) => {
      if (e.target.closest('.card-container') && !e.target.matches('.difficulty-btn')) {
        this.flipCard();
      }
    });
  }

  handleAction(action, element) {
    switch (action) {
      case 'start-session':
        this.startSession();
        break;
      case 'flip-card':
        this.flipCard();
        break;
      case 'rate-again':
        this.rateCard('again');
        break;
      case 'rate-hard':
        this.rateCard('hard');
        break;
      case 'rate-good':
        this.rateCard('good');
        break;
      case 'rate-easy':
        this.rateCard('easy');
        break;
      case 'browse-philosophy':
        window.location.href = 'explore.html';
        break;
      case 'view-progress':
        window.location.href = 'progress.html';
        break;
      case 'reset-session':
        this.resetSession();
        break;
    }
  }

  loadInitialState() {
    const dueCards = getDueCards();
    const sessionInfo = document.getElementById('session-info');

    if (dueCards.length === 0) {
      sessionInfo.innerHTML = `
        <div class="text-center py-8">
          <div class="text-2xl font-serif text-gray-700 mb-4">All caught up!</div>
          <div class="text-gray-600 mb-6">You have no cards due for review. Great work!</div>
          <button data-action="browse-philosophy" class="bg-sage-600 text-white px-6 py-3 rounded-lg hover:bg-sage-700 transition-colors">
            Explore New Philosophy
          </button>
        </div>
      `;
    } else {
      sessionInfo.innerHTML = `
        <div class="text-center py-8">
          <div class="text-2xl font-serif text-gray-700 mb-2">${dueCards.length} cards due</div>
          <div class="text-gray-600 mb-6">Ready to deepen your wisdom?</div>
          <button data-action="start-session" class="bg-sage-600 text-white px-8 py-3 rounded-lg hover:bg-sage-700 transition-colors text-lg">
            Start Review Session
          </button>
        </div>
      `;
    }
  }

  startSession() {
    const dueCards = getDueCards();
    if (dueCards.length === 0) return;

    // Shuffle cards for variety
    this.sessionCards = this.shuffleArray([...dueCards]);
    this.sessionStats = { completed: 0, again: 0, hard: 0, good: 0, easy: 0 };

    this.showCardInterface();
    this.presentNextCard();
  }

  showCardInterface() {
    const container = document.getElementById('card-container');
    container.innerHTML = `
      <div class="max-w-2xl mx-auto">
        <!-- Progress Bar -->
        <div class="mb-6">
          <div class="flex justify-between text-sm text-gray-600 mb-2">
            <span>Session Progress</span>
            <span id="progress-text">0 / ${this.sessionCards.length}</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div id="progress-bar" class="bg-sage-600 h-2 rounded-full transition-all duration-300" style="width: 0%"></div>
          </div>
        </div>

        <!-- Card -->
        <div class="card-container bg-white rounded-lg shadow-lg border border-gray-200 cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div class="card-inner w-full">
            <!-- Front of card -->
            <div class="card-front text-center">
              <div id="card-content" class="w-full max-w-full">
                <!-- Content will be inserted here -->
              </div>
            </div>
            
            <!-- Back of card -->
            <div class="card-back text-center bg-terracotta-50">
              <div id="card-explanation" class="w-full max-w-full">
                <!-- Explanation will be inserted here -->
              </div>
            </div>
          </div>
        </div>

        <!-- Instructions -->
        <div class="text-center mt-4 text-sm text-gray-500">
          Click card to flip • Use keys 1-4 to rate difficulty
        </div>

        <!-- Difficulty Buttons -->
        <div id="difficulty-buttons" class="grid grid-cols-4 gap-3 mt-6 opacity-0 pointer-events-none transition-all duration-300">
          <button data-action="rate-again" class="difficulty-btn bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
            <div class="text-lg">Again</div>
            <div class="text-xs opacity-80">< 1 min</div>
          </button>
          <button data-action="rate-hard" class="difficulty-btn bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
            <div class="text-lg">Hard</div>
            <div class="text-xs opacity-80">< 6 min</div>
          </button>
          <button data-action="rate-good" class="difficulty-btn bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
            <div class="text-lg">Good</div>
            <div class="text-xs opacity-80">< 10 min</div>
          </button>
          <button data-action="rate-easy" class="difficulty-btn bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
            <div class="text-lg">Easy</div>
            <div class="text-xs opacity-80">4 days</div>
          </button>
        </div>
      </div>
    `;

    // Set up card flip animation
    this.setupCardFlip();
  }

  setupCardFlip() {
    const card = document.querySelector('.card-inner');
    card.style.transformStyle = 'preserve-3d';
    card.style.transition = 'transform 0.6s';

    const front = document.querySelector('.card-front');
    const back = document.querySelector('.card-back');

    front.style.backfaceVisibility = 'hidden';
    back.style.backfaceVisibility = 'hidden';
    back.style.transform = 'rotateY(180deg)';
  }

  presentNextCard() {
    if (this.sessionCards.length === 0) {
      this.endSession();
      return;
    }

    this.currentCard = this.sessionCards.shift();
    const cardData = getCardById(this.currentCard);

    if (!cardData) {
      this.presentNextCard();
      return;
    }

    // Reset card state
    this.isCardFlipped = false;
    const cardInner = document.querySelector('.card-inner');
    if (cardInner) {
      cardInner.style.transform = 'rotateY(0deg)';
    }

    // Update card content
    document.getElementById('card-content').innerHTML = `
      <blockquote class="text-2xl font-serif text-gray-800 mb-6 leading-relaxed">
        "${cardData.text}"
      </blockquote>
      <div class="text-lg text-terracotta-600 font-medium">
        — ${cardData.philosopher}
      </div>
      <div class="text-sm text-gray-500 mt-2">
        ${cardData.period}
      </div>
    `;

    document.getElementById('card-explanation').innerHTML = `
      <div class="text-lg text-gray-700 mb-4 leading-relaxed">
        ${cardData.explanation}
      </div>
      <div class="text-sm text-gray-500 mb-4">
        Category: ${cardData.category} • Difficulty: ${cardData.difficulty}
      </div>
      <div class="text-xs text-gray-400">
        Click to return to quote
      </div>
    `;

    // Hide difficulty buttons until card is flipped
    const buttons = document.getElementById('difficulty-buttons');
    buttons.classList.add('opacity-0', 'pointer-events-none');

    // Update progress
    this.updateSessionProgress();
  }

  flipCard() {
    const cardInner = document.querySelector('.card-inner');
    const buttons = document.getElementById('difficulty-buttons');

    if (!this.isCardFlipped) {
      // Flip to show explanation
      cardInner.style.transform = 'rotateY(180deg)';
      buttons.classList.remove('opacity-0', 'pointer-events-none');

      // Animate buttons appearance
      anime({
        targets: '.difficulty-btn',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100),
        duration: 300,
        easing: 'easeOutQuad'
      });
    } else {
      // Flip back to show quote
      cardInner.style.transform = 'rotateY(0deg)';
      buttons.classList.add('opacity-0', 'pointer-events-none');
    }

    this.isCardFlipped = !this.isCardFlipped;
  }

  rateCard(difficulty) {
    if (!this.currentCard) return;

    // Update card in spaced repetition system
    updateCard(this.currentCard, difficulty);

    // Update session stats
    this.sessionStats.completed++;
    this.sessionStats[difficulty]++;

    // Animate card exit
    const cardContainer = document.querySelector('.card-container');

    anime({
      targets: cardContainer,
      opacity: 0,
      translateX: difficulty === 'again' ? -100 : 100,
      duration: 300,
      easing: 'easeInQuad',
      complete: () => {
        this.presentNextCard();
        // Animate card entrance
        anime({
          targets: cardContainer,
          opacity: 1,
          translateX: 0,
          duration: 300,
          easing: 'easeOutQuad'
        });
      }
    });
  }

  updateSessionProgress() {
    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');

    if (progressText && progressBar) {
      const completed = this.sessionStats.completed;
      const total = this.sessionStats.completed + this.sessionCards.length;
      const percentage = (completed / total) * 100;

      progressText.textContent = `${completed} / ${total}`;
      progressBar.style.width = `${percentage}%`;
    }
  }

  endSession() {
    const container = document.getElementById('card-container');
    const accuracy = this.sessionStats.completed > 0 ?
      Math.round(((this.sessionStats.good + this.sessionStats.easy) / this.sessionStats.completed) * 100) : 0;

    container.innerHTML = `
      <div class="text-center py-12 max-w-md mx-auto">
        <div class="text-4xl mb-4">🎉</div>
        <div class="text-2xl font-serif text-gray-700 mb-6">Session Complete!</div>
        
        <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div class="grid grid-cols-2 gap-4 text-center">
            <div>
              <div class="text-2xl font-bold text-sage-600">${this.sessionStats.completed}</div>
              <div class="text-sm text-gray-600">Cards Reviewed</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-sage-600">${accuracy}%</div>
              <div class="text-sm text-gray-600">Accuracy</div>
            </div>
          </div>
          
          <div class="mt-4 pt-4 border-t border-gray-200">
            <div class="text-sm text-gray-600 mb-2">Difficulty Breakdown:</div>
            <div class="flex justify-center space-x-4 text-xs">
              <span class="text-red-500">Again: ${this.sessionStats.again}</span>
              <span class="text-orange-500">Hard: ${this.sessionStats.hard}</span>
              <span class="text-blue-500">Good: ${this.sessionStats.good}</span>
              <span class="text-green-500">Easy: ${this.sessionStats.easy}</span>
            </div>
          </div>
        </div>
        
        <div class="space-y-3">
          <button data-action="start-session" class="w-full bg-sage-600 text-white py-3 px-6 rounded-lg hover:bg-sage-700 transition-colors">
            Start Another Session
          </button>
          <button data-action="browse-philosophy" class="w-full bg-terracotta-600 text-white py-3 px-6 rounded-lg hover:bg-terracotta-700 transition-colors">
            Explore Philosophy
          </button>
          <button data-action="view-progress" class="w-full bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors">
            View Progress
          </button>
        </div>
      </div>
    `;

    this.updateDashboard();
  }

  resetSession() {
    this.sessionCards = [];
    this.currentCard = null;
    this.sessionStats = { completed: 0, again: 0, hard: 0, good: 0, easy: 0 };
    this.loadInitialState();
  }

  updateDashboard() {
    const dueCards = getDueCards();
    const stats = getProgressStats();

    // Update due cards count
    const dueCountElement = document.getElementById('due-count');
    if (dueCountElement) {
      dueCountElement.textContent = dueCards.length;
    }

    // Update total mastered
    const masteredElement = document.getElementById('mastered-count');
    if (masteredElement) {
      const totalMastered = Object.values(stats.categories)
        .reduce((sum, cat) => sum + cat.mastered, 0);
      masteredElement.textContent = totalMastered;
    }

    // Update streak
    const streakElement = document.getElementById('streak-count');
    if (streakElement) {
      streakElement.textContent = stats.streak;
    }
  }

  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.philosophyApp = new PhilosophySRS();

  // Initialize particles background if on index page
  if (document.getElementById('particles-canvas')) {
    initParticles();
  }
});

// Particle background effect
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 50;

  // Create particles
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(122, 132, 113, ${particle.opacity})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();

  // Resize handler
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}