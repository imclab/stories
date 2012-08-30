var fs = require('fs');

fs.writeFileSync('distilled.json', JSON.stringify(JSON.parse(fs.readFileSync('tweets.json', 'utf8')).map(function(t) {
    return {
        text: t.text,
        created_at: t.created_at
    };
})));
