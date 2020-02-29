const fs = require('fs');
const inquirer = require('inquirer');

const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const questions = require('./lib/questions')

const createHTML = require('./templates/createHTML');
const createManager = require('./templates/createManager');
const createEngineer = require('./templates/createEngineer');
const createIntern = require('./templates/createIntern');