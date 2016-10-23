function result() {
    let model = (function () {
        let numA, numB, result;
        function init(selectorA, selectorB, resultSelector) {
            numA = $('#' + selectorA);
            numB = $('#' + selectorB);
            result = $('#' + resultSelector);
        }

        function add() {
            performAction((a, b) => a + b);
        }

        function subtract() {
            performAction((a, b) => a - b);
        }

        function performAction(action) {
            let res = action(Number(numA.val()), Number(numB.val()));
            result.val(res);
        }

        return {init, add, subtract}
    })();

    model.init('num1', 'num2', 'result');
    $('#sumButton').click(model.add);
    $('#subtractButton').click(model.subtract);
}