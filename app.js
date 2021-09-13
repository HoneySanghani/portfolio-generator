var commandLineArg=process.argv;
console.log(commandLineArg);
var profileDataArgs = process.argv.slice(2, process.argv.length)

//ES6 function 
const printProfileData=(profileDataArg)=>{
  console.log(profileDataArg);
}

printProfileData(profileDataArgs);
