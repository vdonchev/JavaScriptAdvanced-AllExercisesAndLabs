function wikiParser(selector) {
    let text = $(selector).text();
    let formatted = text
        .replace(/===([^='\[]+?)===/g, (m, g) => `<h3>${g}</h3>`)
        .replace(/==([^='\[]+?)==/g, (m, g) => `<h2>${g}</h2>`)
        .replace(/=([^='\[]+?)=/g, (m, g) => `<h1>${g}</h1>`)
        .replace(/'''([^'=\[]+?)'''/g, (m, g) => `<b>${g}</b>`)
        .replace(/''([^'=\[]+?)''/g, (m, g) => `<i>${g}</i>`)
        .replace(/\[\[([^'=\[\]]+?)\|([^'=\[\]]+?)]]/g, (m, g1, g2) => `<a href="/wiki/${g1}">${g2}</a>`)
        .replace(/\[\[([^'=\[\]]+?)]]/g, (m, g) => `<a href="/wiki/${g}">${g}</a>`);

    $(selector).html(formatted);
}