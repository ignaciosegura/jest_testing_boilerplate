// Test checking wether SIASAR API is responding or not

const config = require('../includes/config');
const request = require('../includes/request');


it('API server is responding', async () => {
  expect.assertions(1);
  const data = await request.getOutput('');
  expect(data).toEqual('Services Endpoint "api_v1" has been setup successfully.');
});
