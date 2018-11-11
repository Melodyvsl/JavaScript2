
// step 3 => 2

  function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const values = [];
    for (var i = startIndex; i <= stopIndex; i++) {
      values.push(i);
    }
  
    values.forEach(function (x) {
      

        if ((x % 5 === 0) && (x % 3 === 0)) {
        console.log("value = " + x)
        fiveCallback()
        threeCallback();
     }
      else if (x % 3 === 0) {
        console.log("value = " + x);
        threeCallback();
     }
      else if (x % 5 === 0) {
         console.log("value = " + x);
         fiveCallback();
     }
 
       
    });
  }
  
  
  let sayThree = function(threeCallback) {
    console.log("3");
    
  };
  
  let sayFive = function(fiveCallback) {
    console.log("5");
    
  };
  
  
  threeFive(10, 15, sayThree, sayFive)
