// person-factory.test.ts
import {PersonFactory} from './person-factory';

const naturalPerson = PersonFactory.createPerson('N', 'Bender');
const legalPerson = PersonFactory.createPerson('L', 'Leela');

naturalPerson.speak();
legalPerson.speak();
