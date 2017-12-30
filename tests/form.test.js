// Test checking wether SIASAR API is listing Entityforms properly

const config = require('../includes/config');
const request = require('../includes/request');


it('API is listing form types', async () => {
  expect.assertions(2);
  var data = await request.getParsedOutput('forms');

  expect(data).toHaveProperty('comunidad');
  expect(data).toHaveProperty('sistema');
});

