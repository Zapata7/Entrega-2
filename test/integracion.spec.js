//
const request = require('supertest');
const mongoose = require('mongoose');
import Usuario from'../models/User';

//Importando app de index.js
import app from '../index'

// Configuración de las pruebas
beforeAll(async () => {
  const url = process.env.MONGO_URI
  await mongoose.connect(url, { useNewUrlParser: true });
});

// Prueba de integración para el endpoint GET /usuarios
describe('GET /api/user', () => {
  it('Debería obtener todos los usuarios', async () => {
    // Crear algunos usuarios para la prueba
    const usuarios = [
      { nombresUsuario: 'Carlos Marin', celularUsuario: 3205896632 },
      { nombresUsuario: 'Laura Tamayo', celularUsuario: 3502584756 },
    ];
    await Usuario.insertMany(usuarios);

    // Hacer la solicitud GET a /usuarios
    const response = await request(app).get('/api/user');

    // Verificar que la respuesta tenga el status 200
    expect(response.status).toBe(200);

    // Verificar que la respuesta tenga los usuarios creados
    expect(response.body).toHaveLength(usuarios.length);
    expect(response.body[0].nombresUsuario).toBe(usuarios[0].nombresUsuario);
    expect(response.body[1].celularUsuario).toBe(usuarios[1].celularUsuario);
  });
});

// Limpiar las colecciones de la base de datos después de las pruebas
afterEach(async () => {
  await Usuario.deleteMany();
});

// Cerrar la conexión con la base de datos después de las pruebas
afterAll(async () => {
  await mongoose.connection.close();
});