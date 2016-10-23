function executeCommandProcessor(data) {
    let processor = (function () {
        let text = '';
        return {
            append: (item) => text = text + item,
            removeStart: (count) => text = text.slice(count),
            removeEnd: (count) => text = text.slice(0, text.length - count),
            print: () => console.log(text)
        }
    })();

    data
        .forEach(command => {
            let [name, argument] = command.split(/\s+/);
            processor[name](argument);
        })
}

executeCommandProcessor(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']
);