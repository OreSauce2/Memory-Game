document.addEventListener('DOMContentLoaded', () => {
//card option
const cardArray = [
    {
        name: 'fries',
        img: 'src/images/fries.png'
    },
    {
        name: 'Cheeseburger',
        img: 'src/images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'src/images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'src/images/pizza.png'
    },
    {
        name: 'Milkshake',
        img: 'src/images/milkshake.png'
    },
    {
        name: 'Hotdog',
        img: 'src/images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'src/images/fries.png'
    },
    {
        name: 'Cheeseburger',
        img: 'src/images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'src/images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'src/images/pizza.png'
    },
    {
        name: 'Milkshake',
        img: 'src/images/milkshake.png'
    },
    {
        name: 'Hotdog',
        img: 'src/images/hotdog.png'
    },
]

    cardArray.sort(() => 0.5 - Math.random())
    console.log(cardArray)

    const grid = document.querySelector('.grid')
    const resultDisplay = getElementById('result')
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
            cardArray.setAttribute('src', 'src/images/blank.png')
            cardArray.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

function flipCard() {
   let cardId = this.getAttribute('data-id')
    console.log(cardArray[cardId])
    cardsChosen.push(cardArray[cardId].name) 
   cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}

function checkForMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId  === optionTwoId){
        alert('You have clicked the same image')
        cards[optionOneId].setAttribute('src', 'src/images/blank.png')
        cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
    } else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You have found a match!')
        cards[optionOneId].setAttribute('src', 'src/white/blank.png')
        cards[optionTwoId].setAttribute('src', 'src/white/blank.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'src/images/blank.png')
        cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
        alert('Sorry, try again!')
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) 
    {
        resultDisplay.textContent = 'Congratulations, you have won!'
    }
}

    createBoard()
})

