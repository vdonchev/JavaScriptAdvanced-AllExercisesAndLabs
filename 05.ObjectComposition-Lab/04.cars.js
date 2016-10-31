function cars(commands) {
    let carCommandInterpreter = (function () {
        let allCars = new Map;

        function create(newObjName, token, protoName) {
            if (token == null) {
                allCars.set(newObjName, {});
                return;
            }

            allCars.set(newObjName, Object.create(allCars.get(protoName)));
        }

        function set(objName, propName, propVal) {
            allCars.get(objName)[propName] = propVal;
        }

        function print(objName) {
            let res = [];
            let obj = allCars.get(objName);
            for (let prop in obj) {
                res.push(`${prop}:${obj[prop]}`);
            }

            console.log(res.join(', '));
        }

        return {create, set, print};
    })();

    for (let command of commands) {
        let tokens = command.split(/\s+/);
        let commandName = tokens.shift();
        carCommandInterpreter[commandName](...tokens);
    }
}