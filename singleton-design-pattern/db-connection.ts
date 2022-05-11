// db-connection.ts
export class DbConnection {
    count = 0;

    constructor() {
        console.log('DbConnection: constructor()');
        this.count++;
    }

    log() {
        console.log(`DbConnection count = ${ this.count }`);
    }
}
