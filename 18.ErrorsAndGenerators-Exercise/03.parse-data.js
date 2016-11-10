function makeCandy(input) {
    class Candy {
        constructor(topping, filling, spice) {
            this.setTopping = topping;
            this.setFilling = filling;
            this.setSpice = spice;
        }

        set setTopping(value) {
            const TOPPINGS = ['milk chocolate', 'white chocolate', 'dark chocolate'];
            if (!TOPPINGS.includes(value)) {
                throw new Error('Invalid setTopping');
            }

            this.topping = value;
        }

        set setFilling(value) {
            const FILLINGS = ['hazelnut', 'caramel', 'strawberry', 'blueberry', 'yogurt', 'fudge'];
            let tokens = value.split(',');
            if (tokens.length > 3) {
                throw new Error('Invalid amount of fillings');
            }

            if (value.length == 0) {
                value = null;
            } else {
                for (let filling of tokens) {
                    if (!FILLINGS.includes(filling)) {
                        throw new Error('Invalid setFilling');
                    }
                }
            }

            this.filling = value;
        }

        set setSpice(value) {
            let BANNED_SPICES = ['poison', 'asbestos'];
            if (BANNED_SPICES.includes(value)) {
                throw new Error('Invalid setSpice');
            }
            
            if (value.length == 0) {
                value = null;
            }

            this.spice = value;
        }
    }

    let candies = [];
    for (let token of input) {
        if (!/^[^:]+:[^:]*:[^:]*$/g.test(token)) {
            continue;
        }

        try {
            candies.push(new Candy(...splitInput(token)))
        } catch (err) {
            // who cares
        }
    }

    return candies;

    function splitInput(input) {
        return input.split(':');
    }
}

let res = makeCandy([
    'milk chocolate:hazelnut,caramel:pumpkin',
    'dark chocolate::chips',
    'white chocolate::poison',  // invalid
    'white chocolate:fudge:',
    'frosting:yogurt:frosting', // invalid
    'dark chocolate:blueberry:rock crystals',
    '::'
]);

console.log(JSON.stringify(res, null, 1));