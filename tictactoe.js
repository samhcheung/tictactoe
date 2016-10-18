#!/usr/bin/env node
const prompt = require('prompt');

var Board = function() {
  this.space = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
  this.winner = null;
  this.currentplayer = 'x';
}

Board.prototype.displayBoard = function() {
  for(let i = 0; i < this.space.length; i++) {
      console.log('|' + this.space[i][0] + '|' + this.space[i][1] + '|' + this.space[i][2] + '|');
  }
}

Board.prototype.placePiece = function(row,column,type) {

}

Board.prototype.checkWinner = function() {

}

Board.prototype.doTurn = function() {
  console.log(this.currentplayer + "'s turn");
  prompt.start();
  this.winner = 1;
  // prompt.get(['row', 'column'], function (err, result) {
  //     if (err) { return onErr(err); }
  //     console.log('Command-line input received:');
  //     console.log('  Username: ' + result.username);
  //     console.log('  Email: ' + result.email);
  //   });

  //   function onErr(err) {
  //     console.log(err);
  //     return 1;
  //   }

}

console.log("Hello welcome to tic tac toe");
var a = new Board();
a.displayBoard();
while(a.winner === null) {
  a.doTurn();
}