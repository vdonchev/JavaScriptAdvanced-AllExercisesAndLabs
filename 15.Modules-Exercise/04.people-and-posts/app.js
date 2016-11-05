// This is working example with index.html
(function () {
    let Person = require('./models/Person.js');
    let Post = require('./models/Post.js');

    let aleks = new Person('Aleks',30);
    let post = new Post('Neshto si','Text wow','Aleks');

    aleks.addToSelector('#test');
    post.addToSelector('.posts.Aleks');
})();

// Uncomment bellow and comment above to make it work with judge
// result.Person = require('./models/Person');
// result.Post = require('./models/Post');