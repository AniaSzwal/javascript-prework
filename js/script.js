{   let playerWin=0;
    let computerWin =0;

    //Funkcja playGame
    function playGame(playerInput) {
        clearMessages();
// komputer
        const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        const computerMove = getMoveName(randomNumber);

        printMessage('Computer move: ' + computerMove);


// ja
        /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

         console.log('Gracz wpisał: ' + playerInput); */

        const playerMove = getMoveName(playerInput);

        printMessage('Your move: ' + playerMove);

// pokaz wynik
        displayResult(computerMove, playerMove);

// wyswietl punktacje

        const result=document.getElementById('result');
        result.innerHTML= playerWin + '-' + computerWin;

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
        const div = document.createElement('div');
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
            playerWin++;

        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('You win!');
            playerWin++;

        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('You win!');
            playerWin++;
        } else if (argComputerMove == argPlayerMove) {
            printMessage('Remis!')
        } else if (argPlayerMove == 'nieznany ruch') {
            printMessage('Błąd! Nieznana wartość!');
        } else {
            printMessage('You lose ;[')
            computerWin++;

        }

    }




    const playPaper = document.getElementById('play-paper');
    playPaper.addEventListener('click', function () {
        playGame(2)
    })


    const playRock = document.getElementById('play-rock');
    playRock.addEventListener('click', function () {
        playGame(1)
    })

    const playScissors = document.getElementById('play-scissors');
    playScissors.addEventListener('click', function () {
        playGame(3)

    });

}


