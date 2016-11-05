let Article = require('./Article.js');

class ImageArticle extends Article {
    constructor(title, content, image) {
        super(title, content);

        this.image = image;
    }

    getElementString() {
        let obj = $(super.getElementString());
        obj.find('.article-title')
            .after($('<div>')
                .addClass('image')
                .append($('<img>')
                    .attr('src', this.image)));

        return obj;
    }
}

module.exports = ImageArticle;