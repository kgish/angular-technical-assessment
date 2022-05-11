// legal-person.ts
import {IPerson} from './person';

export class LegalPerson implements IPerson {
    name: string

    constructor(name: string) { this.name = name }

    speak() {
        console.log(`I am a legal person named ${this.name}`)
    }
}
