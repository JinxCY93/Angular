import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  firstPlayer = 'X'
  secondPlayer = 'O'
  currentTurn = 'X'
  boardSize = 9
  blankSymbol = '_'
  moves = '_'.repeat(9).split('')
  hoverIndex: number = null
  gameOver = false
  winner = null

  checkCellColor(index: number): string {
    let cell = this.moves[index]

    if (cell !== this.blankSymbol && index === this.hoverIndex) {
      return "red"
    }
    if (cell === this.blankSymbol && index === this.hoverIndex) {
      return "green"
    }

    return "white"
  }

  playPiece(index: number) {
    console.log(index)
    this.moves[index] = this.currentTurn
    if (this.currentTurn === this.firstPlayer) {
      this.currentTurn = this.secondPlayer
    } else {
      this.currentTurn = this.firstPlayer
    }
    this.checkWinner()
  }

  hoverOver(index: number) {
    this.hoverIndex = index
  }

  checkWinner() {
    // check tic toe board
    this.gameOver = true
    this.winner = this.firstPlayer
  }
}


 // who is the current player
 // show the winner or if it is a draw