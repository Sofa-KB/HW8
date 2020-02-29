const questions = {
    person: [
        {
            type: 'input',
            name: 'name',
            message: 'Enter name:'
        },
        {
            type: 'list',
            name: 'role',
            message: 'Role selection:',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email:'
        }
    ],

    manager: [
        {
            type: 'input',
            name: 'phoneNumber',
            message: 'Enter manager office number:'
        }
    ],

    engineer: [
        {
            type: 'input',
            name: 'git',
            message: 'Enter GitHub Username:'
        }
    ],

    intern: [
        {
            type: 'input',
            name: 'school',
            message: 'Enter school name:'
        }
    ],

    addPerson: [
        {
            type: 'confirm',
            name: 'true',
            message: 'Do you have an employee to add?'
        },
    ]
}

module.exports = questions;