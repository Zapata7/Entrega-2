describe('GET /api/user', () => {
    test('Debería retornar una lista de usuarios', async () => {
      const res = await request(app).get('/api/user');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Array);
    });
  });