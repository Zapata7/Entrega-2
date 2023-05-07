describe('POST /api/user', () => {
    test('Debería crear un nuevo usuario', async () => {
      const res = await request(app)
        .post('/api/user')
        .send({
          nombresUsuario: 'Ricardo Torres',
          celularUsuario: 3202177746
        });
      expect(res.statusCode).toEqual(200);
      expect(res.body.nombresUsuario).toEqual('Ricardo Torres');
      expect(res.body.celularUsuario).toEqual(3202177746);
    });
    test('Debería dar error si falta algún campo requerido', async () => {
      const res = await request(app)
        .post('/api/user')
        .send({
          nombresUsuario: 'Ricardo Torres',
          celularUsuario: 3202177746
        });
      expect(res.statusCode).toEqual(400);
    });
  });