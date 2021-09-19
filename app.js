// const fs = require('fs');
const inquirer=require('inquirer');
// const generatePage = require('./src/page-template.js');

// cost pageHTML=generatePage(name,github);


// fs.writeFile('./index.html',pageHTML , err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
const promptUser=()=>{
  return inquirer.prompt([
    {
      type:'input',
      name:'name',
      message:'What is your name?(Required)',
      validate:nameInput=>{
        if(nameInput){
          return true;
        }else{
          console.log("please enter your name!");
          return false;
        }
      }
    },
    {
      type:'input',
      name:'github',
      message:'What is your github name?(Required)',
      validate:githubInput=>{
        if(githubInput){
          return true;
        }else{
          console.log("please enter your guthub name!");
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => confirmAbout
    }
  ])
};
const promptProject=portfolioData=>{
  console.log(`
=================
Add a new Project
=================
    `);
    if(!portfolioData.projects){
      portfolioData.projects=[];
    }
  return inquirer.prompt([
    {
      type:'input',
      name:'name',
      message:'What is the name of the project?(required)',
      validate:projectName=>{
        if(projectName){
          return true;
        }
        else{
          console.log("Please enter the project!");
        }
      }
    },
    {
      type:'input',
      name:'message',
      message:'Provide a description of the project(required)',
      validate:projectDescription=>{
        if(projectDescription){
          return true;
        }
        else{
          console.log("please enter the description!");
        }
      }
    },
    {
      type:'checkbox',
      name:'languages',
      choices:['Javascript','HTML','CSS','ES6','jQuery','Bootstrap','Node']
    },
    {
      type:'input',
      name:'link',
      message:'Enter the GitHub link to your project.(required):',
      validate:githubLink=>{
        if(githubLink){
          return true;
        }
        else{
          console.log("please enter your github link.");
        }
      }
    },
    {
      type:'confirm',
      name:'feature',
      message:'would you like to feature this project?',
      default:true,
    },
    {
      type:'confirm',
      name:'confirmAddProject',
      message:'would you like to enter another project',
    }
  ])
  .then(projectData=>{
    portfolioData.projects.push(projectData);
    if(projectData.confirmAddProject){
      return promptProject(portfolioData);
    }
    else{
      return portfolioData;
    }
  });
};
promptUser()
  .then(promptProject)
  .then(portfolioData=>{
    console.log(portfolioData);
  });