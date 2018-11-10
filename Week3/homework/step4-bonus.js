
// step 4 => Bonus

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
const numbers = [1, 2, 3, 4, 1, 5, 6, 3];


// SET soloution
function getUnique_set(arr){
  return [... new Set(arr)];
}


//forEach solution
function getUnique_forEach(arr){
  let uniqeArray = [];
  arr.forEach(element => {
    if(!uniqeArray.includes(element)){
      uniqeArray.push(element);
    }
  });
  return uniqeArray;
}

getUnique_set(letters);
getUnique_set(numbers);


getUnique_forEach(letters);
getUnique_forEach(numbers);
}


