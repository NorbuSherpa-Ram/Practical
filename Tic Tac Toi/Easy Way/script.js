const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetButton');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.dataset.index;

    if (gameBoard[index] === '' && !checkWinner()) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        if (checkWinner()) {
            setTimeout(() => alert(`Player ${currentPlayer} wins!`), 100);
        } else if (gameBoard.every(cell => cell !== '')) {
            setTimeout(() => alert("It's a draw!"), 100);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    // Loop through each winning combination
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];

        // const combination = winningCombinations[i];
        // const a = combination[0];
        // const b = combination[1];
        // const c = combination[2];

        // Check if the current player's mark is on all three positions of the combination
        if (gameBoard[a] === currentPlayer && gameBoard[b] === currentPlayer && gameBoard[c] === currentPlayer) {
            return true; // If all three positions have the current player's mark, they win
        }
    }
    return false; // If no winning combination is found, return false
}


function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}
