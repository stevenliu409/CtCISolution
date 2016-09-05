function sortedMerge(a,b) {
    var j = 0, i = 0;
    while(i < b.length){
        if(b[i] < a[j]){
            var temp = a[j];
            a[j] = b[i];
            b[i] = temp;
            j++;
        }
        else if(a[j]==0){
            a[j] = b[i];
            i++;
        }
        else {
            j++;
        }
    }

    return a;
}


function sortedMerge2(a,b,lastA, lastB){
  var indexA = lastA - 1;
  var indexB = lastB - 1;
  var indexMerged = lastB + lastA - 1;

  while(indexB >= 0) {
    if(indexA >= 0 && a[indexA] > b[indexB]) {
      a[indexMerged] = a[indexA];
      indexA--;
    } else {
      a[indexMerged] = b[indexB];
      indexB--;
    }
    indexMerged--;
  }
  return a;
}
