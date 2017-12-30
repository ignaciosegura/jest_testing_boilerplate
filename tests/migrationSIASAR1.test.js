// Test checking wether SIASAR API is delivering SIASAR 1 migrated data properly

const config = require('../includes/config');
const request = require('../includes/request');


it('API is delivering SIASAR 1 migrated data properly', async () => {
  expect.hasAssertions();
  var data = await request.getParsedOutput('entity_entityform/15909');
  var ratingField;
  var ratingFieldExists;
  var ratingIsString;
  var ratingIsTaxonomyTerm;

  ratingField = data.rating_s1;
  ratingFieldExists = (typeof ratingField == 'object');
  ratingIsString = (typeof ratingField.name == 'string');
  ratingResourceIsTaxonomyTerm = (ratingField.resource == 'taxonomy_term');

  expect(ratingFieldExists).toBeTruthy();
  expect(ratingIsString).toBeTruthy();
  expect(ratingResourceIsTaxonomyTerm).toBeTruthy();
  expect(ratingField.name).toHaveLength(1);
  expect(ratingField.name).toMatch(/[ABCD]/g);
});
