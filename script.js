
const blocks = document.getElementsByClassName('block')
const turn = document.getElementById('turn')
const winner = document.getElementById('winner')
const restart = document.getElementById('restart')
const individualSign = 'X';
const aiSign = 'O';
const winingCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const add_sign = function (event) {
    if (this.textContent !== '') {
        return
    }
    this.textContent = individualSign

    if (check_winner() === 1) {
        winner.textContent = "Human wins"
        restart.attributes.removeNamedItem("hidden")
    } else if (check_winner() === 2) {
        winner.textContent = "Computer Win"
        restart.attributes.removeNamedItem("hidden")
    }
    pick_ai_block();

}
const check_winner = function () {
    for (let i = 0; i < winingCombinations.length; i++) {
        const winingCombination = winingCombinations[i];
        if (blocks[winingCombination[0]].textContent === blocks[winingCombination[1]].textContent
            && blocks[winingCombination[1]].textContent === blocks[winingCombination[2]].textContent
            && blocks[winingCombination[2]].textContent !== '') {
            if (blocks[winingCombination[0]].textContent === individualSign)
                return 1;
            else
                return 2;
        }
    }
    return -1;
}

const pick_ai_block = function () {
    for (let i = 0; i < winingCombinations.length; i++) {
        const winingCombination = winingCombinations[i];
        for (let j = 0; j < winingCombination.length; j++) {
            if (blocks[winingCombination[0]].textContent === blocks[winingCombination[1]].textContent
                && blocks[winingCombination[2]].textContent === '') {
                blocks[winingCombination[2]].textContent = aiSign;
                return
            } else if (blocks[winingCombination[1]].textContent === blocks[winingCombination[2]].textContent
                && blocks[winingCombination[0]].textContent === '') {
                blocks[winingCombination[0]].textContent = aiSign;
                return
            }
            else if   (blocks[winingCombination[0]].textContent === blocks[winingCombination[2]].textContent
                && blocks[winingCombination[1]].textContent === '') {
                blocks[winingCombination[1]].textContent = aiSign;
                return
            } else if (blocks[winingCombination[j]].textContent === '') {
                blocks[winingCombination[j]].textContent = aiSign;
                return;
            }
        }
    }
}



const restart_game = function () {
    location.reload()
}

for (let index = 0; index < blocks.length; index++) {
    blocks[index].addEventListener('click', add_sign)
}

restart.addEventListener('click', restart_game)