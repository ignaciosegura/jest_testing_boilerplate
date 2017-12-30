// Test checking wether SIASAR API is listing Entityforms properly

const config = require('../includes/config');
const request = require('../includes/request');


it('API is counting entities', async () => {
  expect.hasAssertions();
  var data = await request.getParsedOutput('entity_count/entityform');

  Object.keys(data).forEach(function (key) {
    expect(parseInt(data[key])).toBeGreaterThan(0);
  });
});

