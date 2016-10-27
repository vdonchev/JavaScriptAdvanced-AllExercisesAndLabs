function colorize(selector) {
    let element = $(selector);

    let bestDepth = -1;
    let bestSelector;

    findDeepestChild(0, element);

    function findDeepestChild(depth, selector) {
        if (depth > bestDepth) {
            bestDepth = depth;
            bestSelector = selector;
        }

        let children = selector.children();
        for (let child of children) {
            findDeepestChild(depth + 1, $(child));
        }
    }

    while (true) {
        bestSelector.addClass('highlight');
        if (bestSelector.attr('id') == element.attr('id')) {
            return;
        }

        bestSelector = bestSelector.parent();
    }
}