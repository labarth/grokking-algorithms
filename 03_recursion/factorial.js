const factorial = (value) => {
  if (value === 1) return value;

  if (value > 0) {
    return value * factorial(value - 1);
  }
}
//console.log(factorial(5));