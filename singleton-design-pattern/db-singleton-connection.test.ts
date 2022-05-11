// db-singleton-connection.test.ts
import {DbSingletonConnection as DbConnection} from './db-singleton-connection';

const db1 = DbConnection.getInstance();
const db2 = DbConnection.getInstance();

db1.log();
db2.log();
