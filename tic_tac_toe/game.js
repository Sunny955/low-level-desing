var Player;
(function (Player) {
    Player[Player["None"] = 0] = "None";
    Player[Player["X"] = 1] = "X";
    Player[Player["O"] = 2] = "O";
})(Player || (Player = {}));
var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.board = [
            [Player.None, Player.None, Player.None],
            [Player.None, Player.None, Player.None],
            [Player.None, Player.None, Player.None],
        ];
        this.currentPlayer = Player.X; // X starts the game
    }
    TicTacToe.prototype.makeMove = function (row, col) {
        if (this.isValidMove(row, col)) {
            this.board[row][col] = this.currentPlayer;
            return true;
        }
        return false;
    };
    TicTacToe.prototype.isValidMove = function (row, col) {
        return this.board[row][col] === Player.None;
    };
    TicTacToe.prototype.switchPlayer = function () {
        this.currentPlayer = this.currentPlayer === Player.X ? Player.O : Player.X;
    };
    TicTacToe.prototype.checkWinner = function () {
        // Check rows
        for (var i = 0; i < 3; i++) {
            if (this.board[i][0] !== Player.None &&
                this.board[i][0] === this.board[i][1] &&
                this.board[i][0] === this.board[i][2]) {
                return this.board[i][0];
            }
        }
        // Check columns
        for (var j = 0; j < 3; j++) {
            if (this.board[0][j] !== Player.None &&
                this.board[0][j] === this.board[1][j] &&
                this.board[0][j] === this.board[2][j]) {
                return this.board[0][j];
            }
        }
        // Check diagonals
        if (this.board[0][0] !== Player.None &&
            this.board[0][0] === this.board[1][1] &&
            this.board[0][0] === this.board[2][2]) {
            return this.board[0][0];
        }
        if (this.board[0][2] !== Player.None &&
            this.board[0][2] === this.board[1][1] &&
            this.board[0][2] === this.board[2][0]) {
            return this.board[0][2];
        }
        // Check for tie
        var isTie = true;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.board[i][j] === Player.None) {
                    isTie = false;
                    break;
                }
            }
        }
        if (isTie) {
            return Player.None;
        }
        return Player.None;
    };
    TicTacToe.prototype.printBoard = function () {
        for (var i = 0; i < 3; i++) {
            var row = '';
            for (var j = 0; j < 3; j++) {
                if (this.board[i][j] === Player.None) {
                    row += '_';
                }
                else if (this.board[i][j] === Player.X) {
                    row += 'X';
                }
                else {
                    row += 'O';
                }
                row += ' ';
            }
            console.log(row);
        }
    };
    return TicTacToe;
}());
// Example usage
var game = new TicTacToe();
game.makeMove(0, 0); // X makes a move
game.makeMove(0, 1); // O makes a move
game.makeMove(1, 1); // X makes a move
game.makeMove(1, 0); // O makes a move
game.makeMove(2, 2); // X makes a move
game.printBoard(); // Print the current board
var winner = game.checkWinner();
if (winner !== Player.None) {
    console.log("".concat(winner === Player.X ? 'X' : 'O', " wins!"));
}
else {
    console.log("It's a tie!");
}
