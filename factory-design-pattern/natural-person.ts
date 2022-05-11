// natural-person.ts
import {IPerson} from './person';

export class NaturalPerson implements IPerson {
    name: string

    constructor(name: string) { this.name = name }

    speak() {
        console.log(`I am a natural person named ${this.name}`)
    }
}
