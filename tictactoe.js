#!/usr/bin/env node
const prompt = require('prompt');

var Board = function() {
  this.space = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
  this.winner = null;
  this.currentplayer = 'x';
}

Board.prototype.displayBoard = function() {
    console.log('    |' + '0' + '|' + '1' + '|' + '2' + '| Column');
  for(let i = 0; i < this.space.length; i++) {
      console.log('Row' + i + '|' + this.space[i][0] + '|' + this.space[i][1] + '|' + this.space[i][2] + '|');
  }
}

Board.prototype.placePiece = function(row,column,type) {
  if(type === 'x' || type === 'o'){
    this.space[row][column] = type;
  }
}

Board.prototype.checkWinner = function() {

}

Board.prototype.doTurn = function() {
}

console.log("Hello welcome to tic tac toe");
var a = new Board();
a.displayBoard();
    function onErr(err) {
      console.log(err);
      return 1;
    }
  console.log(a.currentplayer + "'s turn");
  prompt.start();
  // this.winner = 1;
  prompt.get(['row', 'column'], function (err, result) {
      if (err) { return onErr(err); }
      console.log('Command-line input received:');
      console.log('  row: ' + result.row);
      console.log('  column: ' + result.column);
      
    });



// prompt.get(['row', 'column'], function (err, result) {
//       if (err) { return onErr(err); }
//       console.log('Command-line input received:');
//       console.log('  row: ' + result.row);
//       console.log('  column: ' + result.column);
//     });