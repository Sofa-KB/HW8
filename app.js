const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const questions = require('./lib/questions')

const createHTML = require('./templates/createHTML');
const createManager = require('./templates/createManager');
const createEngineer = require('./templates/createEngineer');
const createIntern = require('./templates/createIntern');

async function create() {
    try {
        let id = 1;
        let personCards = "";
        let add = true;

        while(add) {
            const personInfo = await inquirer.prompt(questions.person)
            switch(personInfo.role) {
                case "Manager":
                    const managerInfo = await inquirer.prompt(questions.manager);
                    const manager = new Manager(personInfo.name, id, `${personInfo.email.replace(/\s/g, '')}`, managerInfo.phoneNumber);
                    personCards += createManager(manager);
                    break;
                case "Engineer":
                    const engineerInfo = await inquirer.prompt(questions.engineer);
                    const engineer = new Engineer(personInfo.name, id, `${personInfo.email.replace(/\s/g, '')}`, engineerInfo.git);
                    personCards += createEngineer(engineer);
                    break;
                case "Intern": 
                    const internInfo = await inquirer.prompt(questions.intern);
                    const intern = new Intern(personInfo.name, id, `${personInfo.email.replace(/\s/g, '')}`, internInfo.school);
                    personCards += createIntern(intern);
                    break;    
            }
            const addPerson = await inquirer.prompt(questions.addPerson)
            if(!addPerson.true) add = false;
            id++
        }

        fs.writeFile('./generated/generated.html', createHTML(personCards), function(err){
            if(err) throw err
            console.log('File created successfully!')
        })
    } catch(err) {
        console.log(err);
    }
}

create()