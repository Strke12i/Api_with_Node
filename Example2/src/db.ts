import {Pool} from 'pg';
 
const connectionString="postgres://postgres:postgres123@localhost:5432/Aula_Node";
const db=new Pool({connectionString})


export default db;