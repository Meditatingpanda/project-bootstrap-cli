#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';
import inquirer from 'inquirer';
// import chalk from 'chalk';

const CHOICES = fs.readdirSync(path.join(__dirname, 'templates'));
const QUESTIONS = [
{
    name: 'template',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: CHOICES
},
{
    name: 'name',
    type: 'input',
    message: 'Project name:'
}];


inquirer.prompt(QUESTIONS)
.then(answers => {
    console.log(answers);
});
