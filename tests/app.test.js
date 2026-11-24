const test = require('node:test');
const assert = require('node:assert');

test('WebApp project should be configured', () => {
    const pkg = require('../package.json');
    assert.strictEqual(pkg.name, 'webapp-project');
});
