import express from "express";
const router = express.Router();

import {agregar, listar, eliminar, editar, listaruno} from "../controllers/userControllers.js";

//Ruta es para gestionar usuarios

/**
 * @swagger
 * tags:
 *   name: usersControllers
 *   description: API con conexion mongoBD
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - nombresUsuario
 *         - celularUsuario
 *       properties:
 *         id:
 *           type: string
 *           description: ID generado automáticamente por la base de datos Mongo
 *         nombresUsuario:
 *           type: string
 *           description: Nombre completo del usuario
 *         celularUsuario:
 *           type: number
 *           description: Número de teléfono del usuario
 *       example:
 *         id: 644578b38c93c77a602f7cbb
 *         nombresUsuario: German Zapata
 *         celularUsuario: 3145122771
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Agrega un nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Los campos nombresUsuario y celularUsuario son requeridos
 */

router.get("/", listar);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtiene todos los usuariosalmacenados
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Obtiene la lista de usuarios guardados en la BD
 *     responses:
 *       200:
 *         description:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.get("/:id", listaruno);
/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Obtiene un usuario espefico
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a obtener
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description:
 *       404:
 *         description:
 *
 */
router.post("/", agregar);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: agrega a la base de datos los nuevos usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.put("/:id", editar);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Edita un usuario existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario editado exitosamente
 *       404:
 *         description: El usuario con el ID especificado no fue editado
 *
 */

router.delete("/:id", eliminar);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Elimina un usuario existente en la BD
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a eliminar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: El usuario con el ID especificado no fue eliminado
 *
 */


export default router;