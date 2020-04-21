const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

/**
 * cors({
 * origin: 'http://meuapp.com'
 * })
 */
app.use(cors());
app.use(express.json());

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */
/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * ex. const query = request.query;
 * Route Params: Parâmetros utilizados para identificar recursos
 * ex. const params = request.params;
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * ex. const body = request.body;
 */
/**
 * SQL: MySQL, SQLite, PostgreSLQ, Oracle
 * NoSQL: MongoDB, CouchDB
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.use(routes);
app.use(errors());

module.exports = app;