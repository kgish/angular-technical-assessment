// db-singleton-connection.ts
export class DbSingletonConnection {
    static instance: DbSingletonConnection;
    static count = 0;

    private constructor() {
        console.log('DBSingletonConnection constructor()');
    }

    static getInstance(): DbSingletonConnection {
        if (!DbSingletonConnection.instance) {
            DbSingletonConnection.instance = new DbSingletonConnection();
        }
        DbSingletonConnection.count++;
        return DbSingletonConnection.instance;
    }

    log() {
        console.log(`DbConnection count = ${ DbSingletonConnection.count }`);
    }
}
