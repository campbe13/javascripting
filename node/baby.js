//console.log(process.argv)
/*

process arg 0 is node path
arg 1 is script path
args 2 etc are cli args
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
*/
let sum = 0
for (let i=2;i<process.argv.length;i++) {
 //    console.log("argv" + process.argv[i])
   //  console.log(parseInt(process.argv[i], 10))
     sum += parseInt(process.argv[i], 10)
}

console.log(sum)

