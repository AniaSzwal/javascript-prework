{//Funkcja playGame
    function playGame(playerInput) {
        clearMessages();
// komputer
        let randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        let computerMove = getMoveName(randomNumber);

        printMessage('Computer move: ' + computerMove);


// ja
        /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

         console.log('Gracz wpisał: ' + playerInput); */

        let playerMove = getMoveName(playerInput);

        printMessage('Your move: ' + playerMove);

// pokaz wynik
        displayResult(computerMove, playerMove);

    }

    function getMoveName(number) {
        if (number == 1) {
            return 'kamień';
        } else if (number == 2) {
            return 'papier';
        } else if (number == 3) {
            return 'nożyce';
        } else {
            return 'nieznany ruch'
        }
    }

    function printMessage(msg) {
        let div = document.createElement('div');
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
    }

   const clearMessages = function() {
        document.getElementById('messages').innerHTML = '';
    }


    function displayResult(argComputerMove, argPlayerMove) {

        console.log(' computer ' + argComputerMove);
        console.log(' player ' + argPlayerMove);


        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('You win!');

        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('You win!');

        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('You win!');

        } else if (argComputerMove == argPlayerMove) {
            printMessage('Remis!')
        } else if (argPlayerMove == 'nieznany ruch') {
            printMessage('Błąd! Nieznana wartość!');
        } else {
            printMessage('You lose ;[')

        }

    }


    let playPaper = document.getElementById('play-paper');
    playPaper.addEventListener('click', function () {
        playGame(2)
    })


    let playRock = document.getElementById('play-rock');
    playRock.addEventListener('click', function () {
        playGame(1)
    })

    let playScissors = document.getElementById('play-scissors');
    playScissors.addEventListener('click', function () {
        playGame(3)

    });

}