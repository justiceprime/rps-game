function rpsGame(choice1) {
  var humanChoice;
  humanChoice = choice1.id;
  var botChoice = numberToChoice(randNum());
  console.log(botChoice);
  var results = decideWinner(humanChoice,botChoice);
  console.log(results);
  message = finalMessage(results);
  console.log(message);
  rpsFrontEnd(humanChoice, botChoice, message);
}

function randNum() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(humanChoice, botChoice) {
  var dataBase = {
    'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
    'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
    'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
  }

  var yourScore = dataBase[humanChoice][botChoice];
  var botScore = dataBase[botChoice][humanChoice];

  return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]) {
  if(yourScore === 0) {
    return {'message': 'you lost', 'color': 'red'}
  } else if(yourScore === 0.5) {
    return {'message': 'you tied', 'color': 'yellow'}
    }
     else {
        return {'message': 'you won', 'color': 'green'}
    }
  }

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imageDataBase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src,
  }

  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  var use1 = "USER 1";
  var use2 = "ROBOT";
  humanDiv.innerHTML = "<h1 style='font-size: 30px; padding: 20px;" + "'>" + use1 + "</h1>, <img src='" + imageDataBase[humanImageChoice] + "' height=150 width=150>";
  botDiv.innerHTML = "<h1 style='font-size: 30px; padding: 20px;" + "'>" + use2 + "</h1>, <img src='" + imageDataBase[botImageChoice] + "' height=150 width=150>";
  messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding: 30px;" + "'>" + finalMessage['message'] + "</h1>"

  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
