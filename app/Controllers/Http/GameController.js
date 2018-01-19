'use strict'

class GameController {

  render ({ request, view }) {
    const guessedNumber = Number(request.input('number'))
    const randomNumber = Math.floor(Math.random() * 3) + 1

    return view.render('game', {guessedNumber, randomNumber});
  }
}

module.exports = GameController
