const request = require('supertest');
const app = require('../app');

describe('Prueba del endpoint /saludo', () => {
  test('Debe responder con un mensaje JSON', async () => {
    const response = await request(app).get('/saludo');
    expect(response.statusCode).toBe(200);
    expect(response.body.mensaje).toBe('Hola mundo desde Node.js + CI!');
  });
});
