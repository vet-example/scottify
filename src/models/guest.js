import crypto from 'crypto';
import DynamoDb from '../persistence/dynamodb';

const persistence = new DynamoDb('Attendees');

export default class Guest {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  save() {
    return persistence.save({ name: this.name, age: this.age }).then(result => {
      return this;
    });
  }

  static getByName(name) {
    return persistence.getByKeyValue('name', name);
  }

  toString() {
    return `Guest[name: ${this.name}, age: ${this.age}]`;
  }
}
