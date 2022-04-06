function sumUntil(maxValue) {
  let sum = 0
  let output =''
//   for(let i=1; i<=maxValue; i++){
//     if(i<maxValue){
//     sum = sum+i
//     output += `${i}+`
//   }else {
//     sum =sum+i
//     output += `${i}`}
// }
//   return `${output}=${sum}`
// }

for(i=1; i<=maxValue; i++){
  sum += i
  output += `${i}`
  if(i<maxValue){
    output += `+`
  }else{
    output +=`=${sum}`
  }
}
  return output
}



console.log(sumUntil(5));