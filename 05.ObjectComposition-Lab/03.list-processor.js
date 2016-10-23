function execListProcessor(commands) {
    let processor = (function () {
        let innerStorage = [];

        function add(item) {
            innerStorage.push(item);
        }

        function remove(item) {
            innerStorage = innerStorage.filter(e => e != item);
        }

        function toString() {
            return innerStorage.join(', ');
        }

        function print() {
            console.log('' + innerStorage);
        }

        return {add, remove, print};
    })();

    for (let command of commands) {
        let [op, arg] = command.trim().split(/\s+/);
        processor[op](arg);
    }
}

execListProcessor(['sum hello', 'sum again', 'remove hello', 'sum again', 'print']);
execListProcessor(['sum pesho', 'sum gosho', 'sum pesho', 'remove pesho','print']);