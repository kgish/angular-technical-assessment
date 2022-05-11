// db-connection.test.ts
import { DbConnection } from './db-connection';

const db1 = new DbConnection();
const db2 = new DbConnection();

db1.log();
db2.log();
