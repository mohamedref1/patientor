import supertest from 'supertest';
import app from '../app';

const api = supertest(app);

describe('Diagnosis Api', () => {
  test('GET /api/diagnosis return status code 200', async () => {
    await api.get('/api/diagnosis')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
});