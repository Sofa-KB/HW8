class Person {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    name() {
        return this.name
    }

    email() {
        return this.email
    }

    role() {
        return 'Person'
    }

    id() {
        return this.id
    }
}

module.exports = Person;