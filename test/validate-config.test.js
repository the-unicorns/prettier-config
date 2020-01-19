const prettier = require('prettier');
const test = require('tape');
const config = require('../prettier.config');

test('load config in prettier to validate all rule syntax is correct', function (t) {
    const code = 'const foo = 1\nconst bar = foo => {foo + 1;};\nbar(foo);\n';
    const expected = 'const foo = 1;\nconst bar = (foo) => {\n    foo + 1;\n};\nbar(foo);\n';

    t.equal(prettier.format(code, config), expected);
    t.end();
});
