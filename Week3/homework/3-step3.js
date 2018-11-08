
  // step 3 => 3

  // FOR loop
function repeatStringNumTimesWithFor(str, num) {
    let x = '';
    if (num < 0) {
      return x;
    }
    else {
      for (let i = 0; i < num; i++) {
        x += str
      }
    }
    return x;
  }

  console.log('for', repeatStringNumTimesWithFor('abc', 3));


//   WHILE loop
function repeatStringNumTimesWithWhile(str, num) {
  let x = '';
  while (num > 0) {
    x += str;
    num--;
  }
  return x;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));


//  DO....WHILE loop
function repeatStringNumTimesWithWhile(str, num) {
    let x = '';

    do {
      x += str;
      num--; 

   } while (num > 0);

    return x;
}
  
  console.log(' do...while', repeatStringNumTimesWithWhile('abc', 3));

  

