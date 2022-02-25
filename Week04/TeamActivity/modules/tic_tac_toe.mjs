
export class TicTacToe {

  constructor(cellSelector, resetSelector) {
    this.board = [];
    this.cellSelector = cellSelector;

    document.querySelector(resetSelector).addEventListener('click', this.resetGame.bind(this));
    this.resetGame();
  }

  removeOldListeners() {
    // wipe out all the old events before making new ones
    this.board.forEach((row) => {
      row.forEach((cell) => {
        if (cell && cell.listener) {
          [ 'ontouchend', 'click' ].forEach((event) => {
            cell.el.removeEventListener(event, cell.listener);
          });
        }
      });
    });
  }

  initializeBoard() {
    const cells = Array.from(document.querySelectorAll(this.cellSelector))

    if (cells.length !== 9) {
      alert('Hey this board has an incorrect number of cells');
    }

    this.removeOldListeners();

    this.board = [];

    let row = [];
    cells.forEach((element, index) => {
      const cell = {
        el: element,
        value: '',
        listener: null,
      };

      cell.listener = this.clickCell.bind(this, cell);

      cell.el.children[0].innerText = '';

      row.push(cell);

      [ 'ontouchend', 'click' ].forEach((event) => {
        element.addEventListener(event, cell.listener);
      });

      if ((index + 1) % 3 === 0) {
        this.board.push(row);
        row = [];
      }
    });
  }


  clickCell(cell, event) {
    cell.value = this.currentPlayer;
    cell.el.children[0].innerText = cell.value;

    // We wait a little to actually see the letter before checking for a winner
    setTimeout(() => {
      if (!this.checkForWinner()) {
        this.switchPlayer();
      } else {
        this.removeOldListeners();
      }
    }, 100);
  }

  checkForHorizontalWin() {
    // Check for horizontal wins
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
      const row = this.board[rowIndex];

      let win = true;
      let player = row[0].value;
      for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
        const cell = row[columnIndex];

        if (cell.value !== player) {
          win = false;
        }
      }

      if (win && player !== '') {
        alert("There's a horizontal win!");
        return true;
      }
    }

    return false;
  }

  checkForVerticalWin() {
    // Check for vertical wins
    for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
      let win = true;
      let player = this.board[0][columnIndex].value;

      for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        const cell = this.board[rowIndex][columnIndex];

        if (cell.value !== player) {
          win = false;
        }
      }

      if (win && player !== '') {
        alert("There's a vertical win!");
        return true;
      }
    }

    return false;
  }

  checkForDiagonalWin() {
    // Check for diagonal wins
    let win = true;
    let player = this.board[0][0].value;
    for (let i = 0; i < 3; i++) {
      const cell = this.board[i][i];

      if (cell.value !== player) {
        win = false;
      }
    }

    if (win && player !== '') {
      alert("There's a left diagonal win!");
      return true;
    }

    win = true;
    player = this.board[0][2].value;
    for (let i = 0; i < 3; i++) {
      const cell = this.board[i][2 - i];

      if (cell.value !== player) {
        win = false;
      }
    }

    if (win && player !== '') {
      alert("There's a right diagonal win!");
      return true;
    }

    return false;
  }

  checkForDraw() {
    // Check for a draw
    let draw = true;
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
      for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
        const cell = this.board[rowIndex][columnIndex];

        if (cell.value === '') {
          draw = false;
        }
      }
    }

    if (draw) {
      alert('You had a draw. Click reset board to play again.');
      return true;
    }

    return false;
  }

  checkForWinner() {
    return (
      this.checkForHorizontalWin() ||
      this.checkForVerticalWin()   ||
      this.checkForDiagonalWin()   ||
      this.checkForDraw()          ||
      false
    );
  }

  switchPlayer() {
    if (this.currentPlayer === 'X') {
      this.currentPlayer = 'O';
    } else {
      this.currentPlayer = 'X';
    }

    return this.currentPlayer;
  }

  resetGame() {
    this.initializeBoard();

    this.currentPlayer = 'X';
  }

}
