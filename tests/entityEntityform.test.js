// Test checking wether SIASAR API is fetching data properly

const config = require('../includes/config');
const request = require('../includes/request');


it('API is fetching entityform results', async () => {
  expect.hasAssertions();
  var data = await request.getOutput('entity_entityform');
  var dataIsArray;

  data = JSON.parse(data);
  dataIsArray = Array.isArray(data);

  expect(dataIsArray).toBeTruthy();
  expect(data.length).toBeGreaterThan(0);
});
