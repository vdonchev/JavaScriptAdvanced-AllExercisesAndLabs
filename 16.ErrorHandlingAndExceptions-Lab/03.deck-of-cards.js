function printDeckOfCards(cards) {
    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        set face(value) {
            const FACES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            if (FACES.indexOf(value) < 0) {
                throw new Error('Invalid face');
            }

            this._face = value;
        }

        get face() {
            return this._face;
        }

        set suit(value) {
            const SUITS = {S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663'};
            if (Object.keys(SUITS).indexOf(value) < 0) {
                throw new Error('Invalid suit');
            }

            this._suit = SUITS[value];
        }

        get suit() {
            return this._suit;
        }

        toString() {
            return this.face + this.suit;
        }
    }

    function splitInput(card) {
        return {
            face: card.substr(0, card.length - 1),
            suit: card[card.length - 1]
        }
    }

    let deck = [];
    for (let card of cards) {
        let cardObj = splitInput(card);
        try {
            deck.push(new Card(cardObj.face, cardObj.suit));
        } catch (err) {
            console.log(`Invalid card: ${card}`);
            return
        }
    }

    console.log(deck.join(' '));
}

// Examples:
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);