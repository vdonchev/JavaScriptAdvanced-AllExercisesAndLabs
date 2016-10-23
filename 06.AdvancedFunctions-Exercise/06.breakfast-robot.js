let robot = (function () {
    let resources = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0};
    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    function restock(element, quantity) {
        resources[element] += Number(quantity);
        return 'Success';
    }

    function prepare(recipe, quantity) {
        for (let element of Object.keys(recipes[recipe])) {
            let totalQuantity = recipes[recipe][element] * quantity;
            if (resources[element] < totalQuantity) {
                return `Error: not enough ${element} in stock`;
            }
        }

        for (let element of Object.keys(recipes[recipe])) {
            resources[element] -= recipes[recipe][element] * Number(quantity);
        }

        return 'Success';
    }

    function report() {
        return [...Object.keys(resources)]
            .map(e => e + '=' + resources[e])
            .join(' ');
    }

    return function commandProcessor(input) {
        let tokens = input.split(/ /);
        let commandName = tokens.shift();
        let args = tokens;
        switch (commandName) {
            case 'prepare':
                return prepare(...args);
                break;
            case 'restock':
                return restock(...args);
                break;
            default:
                return report();
                break;
        }
    }
})();

console.log(robot('restock flavour 50'));






