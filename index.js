function average (numbers) {
    let sum = 0;
    for (let i = 0; i <= numbers.length; i++){
        sum += i;
    }
    return sum / numbers.length;
  }

  console.log(average([1,2,3,4]));