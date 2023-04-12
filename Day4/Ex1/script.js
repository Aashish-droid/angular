function prime(n) {
    for (i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  const sequence = [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const filtered = sequence.filter((num) => prime(num));
  console.log(filtered); 
  
    


/*arr = [58, 767, 3, 1, 6, 35477, 55, 1, 3, 5, 7, 11, 678, 38]
res = []

arr.forEach(function(n) {
  for (let i = 2; i < n; i++) {
    if (n % i !== 0) {
      continue;
    } else {
      return;
    }
  }
  res.push(n);
});

console.log(res);*/
