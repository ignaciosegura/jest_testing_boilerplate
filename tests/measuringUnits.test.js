// Test checking wether measuring units have the expected ID

const config = require('../includes/config');
const request = require('../includes/request');


it('Measuring units have the expected properties', async () => {
  let unitList = [
    { umid: 766, machine_name: 'platinum_cobalt_scale', measure: 'color' },
    { umid: 739, machine_name: 'pulgada', measure: 'diametro' },
    { umid: 737, machine_name: 'partes_por_millon', measure: 'concentracion' },
    { umid: 727, machine_name: 'litros_por_segundo', measure: 'flujo_caudal' }
  ];
  expect.assertions(unitList.length);

  for (var unit of unitList) {
    let data = await request.getParsedOutput('entity_units_unit/' + unit.umid);

    data.umid = parseInt(data.umid) || null;
    expect(data).toMatchObject(unit);
  }

});
