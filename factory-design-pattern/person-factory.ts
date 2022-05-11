// person-factory.ts
import {IPerson} from './person';
import {NaturalPerson} from './natural-person';
import {LegalPerson} from './legal-person';

export class PersonFactory {
    public static createPerson(type: string, name = 'unknown') : IPerson {
        if (type === "N") {
            return new NaturalPerson(name);
        } else if (type === "L") {
            return new LegalPerson(name);
        }

        return null as unknown as IPerson;
    }
}
