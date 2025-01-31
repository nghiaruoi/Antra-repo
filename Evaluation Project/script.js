// ================== Model ==================
class GameModel {
  constructor() {
    this.blocks = []; // Array to track the state of each block
    this.score = 0;
    this.timeLeft = 30;
    this.moleInterval = null;
    this.timerInterval = null;
    this.maxMoles = 3; // Maximum moles allowed at the same time
    this.isGameActive = false; // Track if the game is active
  }

  // Initialize the game board with blocks
  initializeBoard(numBlocks) {
    this.blocks = Array.from({ length: numBlocks }, (_, index) => ({
      id: index,
      status: false, // false = no mole, true = mole present
    }));
  }

  // Get a random block that doesn't currently have a mole
  getRandomBlock() {
    const availableBlocks = this.blocks.filter(block => !block.status);
    if (availableBlocks.length === 0) return null; // No available blocks
    const randomIndex = Math.floor(Math.random() * availableBlocks.length);
    return availableBlocks[randomIndex];
  }

  // Add a mole to a random block
  addMole() {
    if (this.blocks.filter(block => block.status).length >= this.maxMoles) return; // Limit moles
    const block = this.getRandomBlock();
    if (block) {
      block.status = true;
    }
  }

  // Remove a mole from a block
  removeMole(blockId) {
    const block = this.blocks.find(block => block.id === blockId);
    if (block) {
      block.status = false;
    }
  }

  // Increment the score
  incrementScore() {
    this.score++;
  }

  // Decrement the timer
  decrementTime() {
    this.timeLeft--;
  }

  // Reset the game state
  reset() {
    this.score = 0;
    this.timeLeft = 30;
    this.isGameActive = false;
    clearInterval(this.moleInterval);
    clearInterval(this.timerInterval);
  }
}

// ================== View ==================
class GameView {
  constructor() {
    this.gameContainer = document.querySelector('.game-container');
    this.scoreElement = document.querySelector('#score');
    this.timerElement = document.querySelector('#timer');
    this.startButton = document.querySelector('#start-button');
  }

  // Render the game board with blocks
  renderBoard(blocks) {
    this.gameContainer.innerHTML = blocks
      .map(
        (block) => `
          <div class="hole" data-id="${block.id}">
            <div class="mole ${block.status ? 'up' : ''}"></div>
          </div>
        `
      )
      .join('');
  }

  // Update the score display
  updateScore(score) {
    this.scoreElement.textContent = score;
  }

  // Update the timer display
  updateTimer(timeLeft) {
    this.timerElement.textContent = timeLeft;
  }

  // Show a mole in a block
  showMole(blockId) {
    const mole = document.querySelector(`.hole[data-id="${blockId}"] .mole`);
    if (mole) {
      mole.classList.add('up');
    }
  }

  // Hide a mole in a block
  hideMole(blockId) {
    const mole = document.querySelector(`.hole[data-id="${blockId}"] .mole`);
    if (mole) {
      mole.classList.remove('up');
    }
  }
}

// ================== Controller ==================
class GameController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.gameDuration = 30; // Total game time in seconds
    this.view.startButton.addEventListener('click', () => this.startGame());
  }

  // Start the game
  startGame() {
    if (this.model.isGameActive) return; // Prevent multiple starts
    this.model.reset();
    this.model.initializeBoard(12); // 3 rows x 4 columns
    this.view.renderBoard(this.model.blocks);
    this.model.score = 0;
    this.model.timeLeft = this.gameDuration;
    this.view.updateScore(this.model.score);
    this.view.updateTimer(this.model.timeLeft);
    this.model.isGameActive = true;

    // Start mole generation
    this.model.moleInterval = setInterval(() => {
      this.model.addMole();
      this.view.renderBoard(this.model.blocks);
    }, 1000);

    // Start timer
    this.model.timerInterval = setInterval(() => {
      this.model.decrementTime();
      this.view.updateTimer(this.model.timeLeft);
      if (this.model.timeLeft === 0) {
        this.endGame();
      }
    }, 1000);

    // Add event listeners for whacking moles
    this.view.gameContainer.addEventListener('click', (e) => {
      if (!this.model.isGameActive) return; // Ignore clicks if the game is not active
      const block = e.target.closest('.hole');
      if (block) {
        const blockId = parseInt(block.dataset.id);
        if (this.model.blocks[blockId].status) {
          this.model.incrementScore();
          this.view.updateScore(this.model.score);
          this.model.removeMole(blockId);
          this.view.hideMole(blockId);
        }
      }
    });
  }

  // End the game
  endGame() {
    this.model.isGameActive = false;
    clearInterval(this.model.moleInterval);
    clearInterval(this.model.timerInterval);
    alert(`Game Over! Your score is ${this.model.score}`);
  }
}

// ================== Initialize Game ==================
const model = new GameModel();
const view = new GameView();
const controller = new GameController(model, view);