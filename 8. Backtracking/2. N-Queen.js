

let board = [ 
    [0, 0, 0, 0], 
    [0, 0, 0, 0], 
    [0, 0, 0, 0], 
    [0, 0, 0, 0] 
] 

let isFound = false; 

function isSafe(board, row, col) { 
    // Same column upper side check 
    for(let i = row; i >= 0; i--) {
        if(board[i][col] === 1) {
            return false; 
        }
    } 

    // Upper side Left diagonal check 
    for(let i = row, j = col; i >= 0 && j >= 0; i--, j--) { 
        if(board[i][j] === 1) {
            return false; 
        }
    } 

    // Upper side Right diagonal check 
    for(let i = row, j = col; i >= 0 && j < board.length; i--, j++) { 
        if(board[i][j] === 1) {
            return false; 
        }
    } 
    return true; 
}

function queen(board, row) { 
    if(row === 4) {
        for(let i = 0; i < board.length; i++) {
            console.log('[' + board[i].join(' ') + ']');
        }
        isFound = true; 
        return; 
    }

    if(isFound) {
        return; 
    }

    for(let col = 0; col < board.length; col++) {
        if(isSafe(board, row, col)) {
            board[row][col] = 1; 
            queen(board, row+1); 
            board[row][col] = 0; 
        }
    } 
} 

queen(board, 0); 
