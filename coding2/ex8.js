const play = (state, letter) => {

  let newCurrentProgress = '';

  for(let i = 0; i< state.wordToGuess.length; i++){
      if(state.wordToGuess.charAt(i) === letter){
        newCurrentProgress+=letter;
      }else{
        newCurrentProgress+=state.currentProgress.charAt(i);
      }
  }


  return {
    wordToGuess: state.wordToGuess,
    currentProgress: newCurrentProgress
  };
};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let state = {
  wordToGuess: 'maisons',
  currentProgress: '*******'
};

rl.on('line', (input) => {

  state = play(state, input);
  if (state.wordToGuess === state.currentProgress) {
    console.log('you win');
    rl.close();
  }
  console.log('current word : ' + state.currentProgress);

});


