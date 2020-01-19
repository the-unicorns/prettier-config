const config = require('../prettier.config');
const test = require('tape');

test('test basic properties of config', function (t) {
    t.equal(config.tabWidth, 4);
    t.ok(config.semi);
    t.ok(config.bracketSpacing);
    t.equal(config.arrowParens, "always");
    t.equal(Object.keys(config).length, 4);
    t.end()
});
