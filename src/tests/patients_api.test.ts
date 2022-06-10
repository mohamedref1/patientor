import supertest from 'supertest';
import app from '../app';

const api = supertest(app);

describe('Patients Api', () => {
  test('expect GET /api/patients return status code 200', async () => {
    await api.get('/api/patients')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('expect GET /api/patients/:id return status code 200', async () => {
    const response =
      await api.get('/api/patients/d2773336-f723-11e9-8f0b-362b9e155667')
        .expect(200)
        .expect('Content-Type', /application\/json/);

    expect(response.body.name).toEqual('John McClane');
  });

  test('expect GET /api/patients/:id return status code 400', async () => {
    await api.get('/api/patients/d2773336-f723-11e9-8f0b-362b9e155667x')
      .expect(400)
      .expect('Content-Type', /application\/json/);
  });

  test('expect GET /api/patients/:id return status code 404', async () => {
    await api.get('/api/patients/d2773336-f723-11e9-8f0b-362b9e155661')
      .expect(400)
      .expect('Content-Type', /application\/json/);
  });
});