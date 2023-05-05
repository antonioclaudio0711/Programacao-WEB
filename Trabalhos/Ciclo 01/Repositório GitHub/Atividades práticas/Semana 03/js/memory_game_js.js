document.addEventListener('DOMContentLoaded', () => {
    const cards = [
        {name: 'ant_man_quantumania', img: '../images/ant_man_quantumania_image.jpg'},
        {name: 'avatar', img: '../images/avatar_image.jpg'},
        {name: 'black_panther_wakanda_forever', img: '../images/black_panther_wakanda_forever_image.jpg'},
        {name: 'vingadores_ultimato', img: '../images/vingadores_ultimato_image.jpg'},
        {name: 'harry_potter', img: '../images/harry_potter_image.jpg'},
        {name: 'joker', img: '../images/joker_image.jpg'},
        {name: 'shazam', img: '../images/shazam_image.jpg'},
        {name: 'spider_man', img: '../images/spider_man_image.jpg'},
        {name: 'ant_man_quantumania', img: '../images/ant_man_quantumania_image.jpg'},
        {name: 'avatar', img: '../images/avatar_image.jpg'},
        {name: 'black_panther_wakanda_forever', img: '../images/black_panther_wakanda_forever_image.jpg'},
        {name: 'vingadores_ultimato', img: '../images/vingadores_ultimato_image.jpg'},
        {name: 'harry_potter', img: '../images/harry_potter_image.jpg'},
        {name: 'joker', img: '../images/joker_image.jpg'},
        {name: 'shazam', img: '../images/shazam_image.jpg'},
        {name: 'spider_man', img: '../images/spider_man_image.jpg'},
    ];

    //Embaralhar todas as cartas
    cards.sort(() => 0.5 - Math.random());

    //Carregar elementos HTML no script
    const board = document.querySelector('.board');
    const resultView = document.querySelector('#result');

    //Array de cartas selecionadas
    let cardsChoosen = [];

    //Array dos ID's das cartas selecionadas
    let cardsChoosenId = [];

    //Array das cartas combinadas
    let cardsWon = [];
    
    //Criar o quadro de cartas
    function createBoard() {
        for (let i = 0; i < cards.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', '../images/board.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            board.appendChild(card);
        }
    }

    //Verificar se as cartas selecionadas são iguais
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChoosenId[0];
        const optionTwoId = cardsChoosenId[1];

        if (optionOneId == optionTwoId) {
            //Verificar clique na mesma imagem
            cards[optionOneId].setAttribute('src', '../images/board.jpg');
            cards[optionTwoId].setAttribute('src', '../images/board.jpg');
            alert('Você clicou na mesma imagem!');

        } else if (cardsChoosen[0] === cardsChoosen[1]) {
          //Verificar clique em imagens distintas 
            cards[optionOneId].setAttribute('src', '../images/check.jpg');
            cards[optionTwoId].setAttribute('src', '../images/check.jpg');

            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);

            cardsWon.push(cardsChoosen);

            alert('Você acabou de descobrir um par de cartas!');

        } else {
            cards[optionOneId].setAttribute('src', '../images/board.jpg');
            cards[optionTwoId].setAttribute('src', '../images/board.jpg');
        }

        cardsChoosen = [];
        cardsChoosenId = [];
    }

    //Virar uma determinada carta
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChoosen.push(cards[cardId].name);
        cardsChoosenId.push(cardId);
        this.setAttribute('src', cards[cardId].img);

        if (cardsChoosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
});