const portfolioDataArgs = process.argv.slice(2,process.argv.length);
const printPortfolioData=(profileDataArr)=>{
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
      }
    
      console.log('================');
    
      // Is the same as this...
      profileDataArr.forEach((profileItem) => {
        console.log(profileItem)
      });
}
printPortfolioData(portfolioDataArgs);