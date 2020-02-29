const Person = require('./person')

class Intern extends Person {
    constructor(name, id, email, school) {
        super(name, id, email, school)
    }

    school() {
        return this.school
    }

    role() {
        return "Intern"
    }
}

module.exports = Intern;
