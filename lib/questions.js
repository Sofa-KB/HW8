const questions = {
    person: [
        {
            type: 'input',
            name: 'name',
            message: 'Please enter employee name:'
        },
        {
            type: 'list',
            name: 'name',
            message: 'Employee role selection:',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee e-mail:'
        }
    ],

    manager: [
        {
            type: 'input',
            name: 'phoneNumber',
            message: 'Enter manager phone number:'
        }
    ],

    engineer: [
        {
            type: 'input',
            name: 'git',
            message: 'Enter employee GitHub Username:'
        }
    ],

    intern: [
        {
            type: 'input',
            name: 'school',
            message: 'Enter intern school name:'
        }
    ],

    addPerson: [
        {
            type: 'confirm',
            name: 'correct',
            message: "Would you like to add another person to the team?"
        }
    ]
}

module.exports = questions;