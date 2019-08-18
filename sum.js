let sum = 0;

for(let i = 2; i < (process.argv.length); i++){
 sum += 1*process.argv[i];
}


console.log(sum);

// console.log(
//   process.argv.slice(2)
//          .reduce((total, number)=> total + 1*number, 0)
// );
