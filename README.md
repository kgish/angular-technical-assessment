# Angular Technical Assessment

These are a number of exercises and questions that can be used for assessing the technical knowledge of the 
Angular framework.

## Singleton Design Pattern

Question #1
```
* What is a singleton and why is it useful?
```

Consider the following simple class definition.

```
// db-connection.ts
export class DbConnection {
    count = 0;

    constructor() {
        console.log('DbConnection: constructor()');
        this.count++;
    }

    log() {
        console.log(`DbConnection count = ${this.count}`);
    }
}
```

The following test code is executed.

```
// db-connection.test.ts
import { DbConnection } from './db-connection';

const db1 = new DbConnection();
const db2 = new DbConnection();

db1.log();
db2.log();
```

Question #2
```
* What is the expected output of this test code?
```

Question #3
```
* How would you change the code above to make `DbConnection` a singleton class?
```

Use the following template.
```
// db-singleton-connection.ts
export class DbSingletonConnection {
    // properties

    // constructor
    
    // ...

    log() {
        console.log(`DbConnection count = ${ DbSingletonConnection.count }`);
    }
}
```

Question #4
```
* What is now the expected output of the preceding test code?
```

## Factory Design Pattern

Question #1
```
* What is a factory and why is it useful?
```

Consider the following three files.

1. Person interface
```
// person.ts
export interface IPerson {
    name: string;
    speak(): void;
}
```

2. Natural person
```
// natural-person.ts
import {IPerson} from './person';

export class NaturalPerson implements IPerson {
    name: string

    constructor(name: string) { this.name = name }

    speak() {
        console.log(`I am a natural person named ${this.name}`)
    }
}
```

3. Legal person
```
// legal-person.ts
import {IPerson} from './person';

export class LegalPerson implements IPerson {
    name: string

    constructor(name: string) { this.name = name }

    speak() {
        console.log(`I am a legal person named ${this.name}`)
    }
}
```

Question #2
```
* Using the code sample above how would you create a factory builder?
```

Use the following template.
```
// person-factory.ts
import {IPerson} from './person';
import {NaturalPerson} from './natural-person';
import {LegalPerson} from './legal-person';

export class PersonFactory {
    // ...
}
```

Question #3
```
* Create a test to verify that your person facotry works.
```

```
// person-factory.test.ts
import {PersonFactory} from './person-factory';

const naturalPerson = // ...
const legalPerson = //;

naturalPerson.speak();
legalPerson.speak();
```

## Performance

The frontend you are building has become complex resulting in poor performance, namely:

* extremely slow initial load
* slow page load when navigating
* blank pages before table lists are displayed

Question #1
```
* How would you improve the performance of the frontend?
```

## Multi-language support

The frontend you are building is written in English but the stakeholders would like a Dutch
version as well.

Question #1
```
* How would you go about adding a new language?
```

Question #2
```
* What changes if any would be needed on the backend?
```

The stakeholders would like to be able to change the text on demand rather than have to request the
development team to make such changes.

Question #3
```
* How would you go about making it possible for authenticated users to make text changes on the fly?
```

Now the stakeholders want to create a white-label version of the frontend so that the application can be sold
to international customers.

Question #4
```
* How would you go about making the frontend multi-lingual and future proof for the addition of more languages?
```

-EOF-
