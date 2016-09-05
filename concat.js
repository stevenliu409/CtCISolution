// my concat with iteration
function myConcat(arr1,arr2) {
    for (var i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    };
    return arr1;
}

// my concat function with reduce
function myConcat(arr1,arr2) {
    arr2.reduce(function(acc,curr){ return arr1.push(curr); } , arr1);
    return arr1;
}

