// run time is O(n)
function mySplit(a, char) {

  var arr = [], idxArr = [];
  for(var j = 0; j < a.length; j++) {
    if(a.charAt(j) == char) {
       idxArr.push(j);
    }
  }

  var i = 0;
  for(var k = 0; k < idxArr.length; k++) {
    arr.push(a.substring(i,idxArr[k]));
    i = idxArr[k]+1;
  }
  arr.push(a.substring(i,a.length));
  return arr;
}

