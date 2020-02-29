const Person = require('./person')

class Engineer extends Person {
    constructor(name, id, email, git) {
        super(name, id, email, git)
    }

    git() {
        return this.git
    }

    role() {
        return 'Engineer'
    }
}   

module.exports = Engineer;