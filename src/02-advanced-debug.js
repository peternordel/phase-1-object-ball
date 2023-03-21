console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    let data = teamObj.players
    for (let key in data) {
      debugger
    }
  }
}

// then, call the function so it runs!
goodPractices()
