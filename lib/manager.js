const Person = require('./person')

class Manager extends Person {
    constructor(name, id, email, phoneNumber) {
        super(name, id, email, phoneNumber);
    }

    phoneNumber() {
        return this.phoneNumber
    }

    role() {
        return 'Manager'
    }
}

module.exports = Manager;