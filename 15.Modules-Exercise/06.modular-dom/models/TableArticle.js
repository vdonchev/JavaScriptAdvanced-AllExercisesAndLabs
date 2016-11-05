let Article = require('./Article.js');

class TableArticle extends Article {
    constructor(title, content) {
        super(title, content);

        this.headings = null;
        this.data = null;
    }

    loadData(headings, data) {
        this.headings = headings;
        this.data = data;
    }

    getElementString() {
        let table = $('<table>')
            .addClass('data');

        let tHead = $('<tr>');
        for (let heading of this.headings) {
            tHead
                .append($('<th>')
                    .text(heading));
        }

        table
            .append(tHead);

        for (let obj of this.data) {
            let row = $('<tr>');
            for (let heading of this.headings) {
                let converted = heading
                    .replace(/\s+/g, '')
                    .toLowerCase();

                row
                    .append($('<td>')
                        .text(obj[converted]));
            }

            table.append(row);
        }

        let obj = $(super.getElementString());
        return obj
            .append($('<div>')
                .addClass('table')
                .append(table));
    }
}

module.exports = TableArticle;