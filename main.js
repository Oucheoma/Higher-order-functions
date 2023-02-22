const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  var checkA = val + 2;
  var checkB = func(val)

  if(checkA === checkB){
    return checkB
  }else{
    console.log('inconsistent results')
  }

}

console.log(checkConsistentOutput(addTwo,45));




// val = 45
checkA = 45 + 2= 47

checkB =func(val). here val is a parameter of the function. nthe func function takes in addTwo function as a paramenter 
therefore func(val) = addTwo function with val as num
num + 2 = 45 + 5
in essence, checkA === checkB and when logged returns value 47

but if the number "2" is changed in the checkA=val +2 formular, checkA===checkB and it will log inconsistent results
