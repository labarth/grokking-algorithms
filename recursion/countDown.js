const countDown = (i) => {
  console.log(i);
  if (i > 0) {
    return countDown(--i);
  }
  return 0;
}

//countDown(5);