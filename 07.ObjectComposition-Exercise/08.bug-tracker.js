function generateBugManager() {
    let id = 0;
    let bugs = [];
    let printer = undefined;

    function report(author, description, reproducible, severity) {
        let newReport = {
            ID: id++,
            author: author,
            description: description,
            reproducible: reproducible,
            severity: severity,
            status: 'Open'
        };

        bugs.push(newReport);
        sort();
    }

    function setStatus(id, newStatus) {
        bugs.filter(r => r.ID == id)[0].status = newStatus;
        sort();
    }

    function remove(id) {
        bugs = bugs.filter(r => r.ID != id);
        sort();
    }

    function sort(method = 'ID') {
        switch (method) {
            case 'ID':
                bugs = bugs.sort((a, b) => a.ID - b.ID);
                break;
            case 'author':
                bugs = bugs.sort((a, b) => a.author.toString().localeCompare(b.author.toString()));
                break;
            default: // severity
                bugs = bugs.sort((a, b) => a.severity - b.severity)
        }

        updateScreen();
    }

    function output(selector) {
        printer = selector;
    }

    function updateScreen() {
        if (printer) {
            let parent = $(printer);
            parent.text('');
            for (let bug of bugs) {
                let html = formatBug(bug);
                parent.append(html);
            }
        }
    }

    function formatBug(bug) {
        return $('<div>')
            .attr('id', 'report_' + bug.ID)
            .addClass('report')
            .append($('<div>')
                .addClass('body')
                .append($('<p>')
                    .text(bug.description)))
            .append($('<div>')
                .addClass('title')
                .append($('<span>')
                    .addClass('author')
                    .text('Submitted by: ' + bug.author))
                .append($('<span>')
                    .addClass('status')
                    .text(bug.status + ' | ' + bug.severity)));
    }

    return {report, setStatus, remove, sort, output};
}