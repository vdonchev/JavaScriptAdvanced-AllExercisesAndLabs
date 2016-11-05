let BaseElement = require('./BaseElement.js');

class Article extends BaseElement {
    constructor(title, content) {
        super();
        this.title = title;
        this.content = content;
        this.timestamp = new Date();
    }

    getElementString() {
        return $('<div>')
            .addClass('article')
            .append($('<div>')
                .addClass('article-title')
                .text(this.title))
            .append($('<p>')
                .text(this.content));
    }
}

module.exports = Article;