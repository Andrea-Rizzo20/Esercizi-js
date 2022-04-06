function calculate(num) {
  let tot = 0
  return {
    add(num){
    tot += num
    return this
  },
  sub(num){
    tot -= num
    return this
  },
  multiply(num){
  tot *= num
  return this
  },
  divide(num){
    tot /= num
    return this
  },
  printResult(){
    console.log(tot)
  },
};




}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7