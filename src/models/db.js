require('dotenv').config();

console.log('PGUSER:', process.env.PGUSER);
console.log('PGDATABASE:', process.env.PGDATABASE);
console.log('PGHOST:', process.env.PGHOST);
console.log('PGPORT:', process.env.PGPORT);

const { Pool } = require('pg');

const pool = new Pool();

module.exports = pool; 